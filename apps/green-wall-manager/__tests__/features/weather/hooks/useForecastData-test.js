import { renderHook, waitFor } from '@testing-library/react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getForecastDays, FALLBACK_FORECAST_DATA } from '@/services/forecast'
import useForecastData from '@/features/weather/hooks/useForecastData'

jest.mock('@/services/forecast', () => {
	const actual = jest.requireActual('@/services/forecast')

	return {
		...actual,
		getForecastDays: jest.fn()
	}
})

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// ✅ turns retries off
			gcTime: Infinity,
			retry: false
		}
	}
})

const wrapper = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useForecastData', () => {
	const mockGetForecastDays = getForecastDays

	beforeAll(() => {
		jest.spyOn(console, 'log').mockImplementation(() => {})
		jest.spyOn(console, 'error').mockImplementation(() => {})
	})
	afterAll(() => {
		console.log.mockRestore()
		console.error.mockRestore()
	})

	afterEach(() => {
		queryClient.clear()
		mockGetForecastDays.mockClear()
	})

	test('should return forecast data on successful fetch', async () => {
		mockGetForecastDays.mockResolvedValue(FALLBACK_FORECAST_DATA)

		const { result } = renderHook(() => useForecastData(), { wrapper })

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		expect(result.current.data).toStrictEqual(FALLBACK_FORECAST_DATA)
	})

	test('should return fallback data on fetch failure', async () => {
		mockGetForecastDays.mockRejectedValue(
			new Error('Failed to get forecast data')
		)

		const { result } = renderHook(() => useForecastData(), { wrapper })

		await waitFor(() => expect(result.current.isError).toBe(true))

		expect(result.current.data).toStrictEqual(FALLBACK_FORECAST_DATA)
	})
})
