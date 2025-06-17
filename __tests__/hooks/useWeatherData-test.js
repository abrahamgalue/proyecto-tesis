import { renderHook, waitFor } from '@testing-library/react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getWeatherData, FALLBACK_WEATHER_DATA } from '@/lib/weather'
import useWeatherData from '@/hooks/useWeatherData'

jest.mock('@/lib/weather', () => {
	const actual = jest.requireActual('@/lib/weather')

	return {
		...actual,
		getWeatherData: jest.fn()
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

describe('useWeatherData', () => {
	const mockGetWeatherData = getWeatherData

	afterEach(() => {
		queryClient.clear()
		mockGetWeatherData.mockClear()
	})

	test('should return weather data on successful fetch', async () => {
		mockGetWeatherData.mockResolvedValue(FALLBACK_WEATHER_DATA)

		const { result } = renderHook(() => useWeatherData(), { wrapper })

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		expect(result.current.data).toStrictEqual(FALLBACK_WEATHER_DATA)
	})

	test('should return fallback data on fetch failure', async () => {
		mockGetWeatherData.mockRejectedValue(
			new Error('Failed to get weather data')
		)

		const { result } = renderHook(() => useWeatherData(), { wrapper })

		await waitFor(() => expect(result.current.isError).toBe(true))

		expect(result.current.data).toStrictEqual(FALLBACK_WEATHER_DATA)
	})
})
