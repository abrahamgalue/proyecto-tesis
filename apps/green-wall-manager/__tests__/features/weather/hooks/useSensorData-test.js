import { renderHook, waitFor } from '@testing-library/react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getSensorData, FALLBACK_SENSOR_DATA } from '@/services/sensor'
import useSensorData from '@/features/weather/hooks/useSensorData'

jest.mock('@/services/sensor', () => {
	const actual = jest.requireActual('@/services/sensor')

	return {
		...actual,
		getSensorData: jest.fn()
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

describe('useSensorData', () => {
	const mockGetSensorData = getSensorData

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
		mockGetSensorData.mockClear()
	})

	test('should return sensor data on successful fetch', async () => {
		mockGetSensorData.mockResolvedValue(FALLBACK_SENSOR_DATA)

		const { result } = renderHook(() => useSensorData(), { wrapper })

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		expect(result.current.data).toStrictEqual(FALLBACK_SENSOR_DATA)
	})

	test('should return fallback data on fetch failure', async () => {
		mockGetSensorData.mockRejectedValue(new Error('Failed to get sensor data'))

		const { result } = renderHook(() => useSensorData(), { wrapper })

		await waitFor(() => expect(result.current.isError).toBe(true))

		expect(result.current.data).toStrictEqual(FALLBACK_SENSOR_DATA)
	})
})
