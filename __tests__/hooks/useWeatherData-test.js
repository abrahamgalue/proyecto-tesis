import { renderHook, waitFor, act } from '@testing-library/react-native'
import { getWeatherData, FALLBACK_WEATHER_DATA } from '@/lib/weather'
import useWeatherData from '@/hooks/useWeatherData'

jest.mock('@/lib/weather', () => {
	const actual = jest.requireActual('@/lib/weather')

	return {
		...actual,
		getWeatherData: jest.fn()
	}
})

describe('useWeatherData', () => {
	const mockGetWeatherData = getWeatherData

	test('should set weather data on successful fetch', async () => {
		mockGetWeatherData.mockResolvedValue(FALLBACK_WEATHER_DATA)

		const { result } = renderHook(() => useWeatherData())

		expect(result.current.weatherData).toStrictEqual({})

		await waitFor(() => {
			expect(result.current.weatherData).toStrictEqual(FALLBACK_WEATHER_DATA)
		})
	})

	test('should set fallback data on fetch failure', async () => {
		mockGetWeatherData.mockRejectedValue(
			new Error('Failed to get weather data')
		)

		const { result } = renderHook(() => useWeatherData())

		expect(result.current.weatherData).toStrictEqual({})

		await waitFor(() => {
			expect(result.current.weatherData).toStrictEqual(FALLBACK_WEATHER_DATA)
		})
	})

	test('does not call setWeatherData if unmounted before fetch resolves', async () => {
		let resolveFetch
		const fetchPromise = new Promise((resolve) => {
			resolveFetch = resolve
		})

		mockGetWeatherData.mockReturnValue(fetchPromise)

		const { result, unmount } = renderHook(() => useWeatherData())

		expect(result.current.weatherData).toStrictEqual({})

		unmount()

		await act(async () => {
			resolveFetch({
				tempOutside: '25',
				humidity: '50%',
				UV: { index: '3', state: 'Moderado' },
				wind: { speed: '20', unit: 'km/h' },
				sensationThermal: '27'
			})
		})

		expect(result.current.weatherData).toStrictEqual({})
	})

	test('does not call setWeatherData on fetch failure if unmounted before rejection', async () => {
		let rejectFetch
		const fetchPromise = new Promise((_, reject) => {
			rejectFetch = reject
		})

		mockGetWeatherData.mockReturnValue(fetchPromise)

		const { result, unmount } = renderHook(() => useWeatherData())

		expect(result.current.weatherData).toStrictEqual({})

		unmount()

		await act(async () => {
			rejectFetch(new Error('Failed to get weather data'))
		})

		expect(result.current.weatherData).toStrictEqual({})
	})
})
