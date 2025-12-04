import { env } from '@/data/env/client'
import { getForecastDays, FALLBACK_FORECAST_DATA } from '@/services/forecast'

const FORECAST_API_URL = env.FORECAST_API_URL

describe('getForecastDays', () => {
	beforeEach(() => {
		global.fetch = jest.fn()
		jest.clearAllMocks()
	})

	test('fetches forecast data correctly with exactly 3 days', async () => {
		const mockApiResponse = {
			forecastDays: [
				{ day: 'Lunes', type: 'sunny', temp: '30°/35°', detail: '80% Sol' },
				{ day: 'Martes', type: 'rainy', temp: '22°/27°', detail: '60% Llu' },
				{ day: 'Miércoles', type: 'cloudy', temp: '25°/28°', detail: '70% Nub' }
			]
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		const result = await getForecastDays()

		expect(fetch).toHaveBeenCalledWith(FORECAST_API_URL)
		expect(result).toEqual(mockApiResponse)
	})

	test('returns fallback when forecastDays array has less than expected', async () => {
		const mockApiResponse = {
			forecastDays: [
				{ day: 'Lunes', type: 'sunny', temp: '30°/35°', detail: '80% Sol' }
			]
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		const result = await getForecastDays()

		expect(result).toEqual(FALLBACK_FORECAST_DATA)
	})

	test('slices forecastDays if there are more than 3 days', async () => {
		const mockApiResponse = {
			forecastDays: [
				{ day: 'Lunes', type: 'sunny', temp: '30°/35°', detail: '80% Sol' },
				{ day: 'Martes', type: 'rainy', temp: '22°/27°', detail: '60% Llu' },
				{
					day: 'Miércoles',
					type: 'cloudy',
					temp: '25°/28°',
					detail: '70% Nub'
				},
				{ day: 'Jueves', type: 'storm', temp: '20°/25°', detail: '90% Tor' }
			]
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		const result = await getForecastDays()

		expect(result.forecastDays).toHaveLength(3)
		expect(result.forecastDays[0].day).toBe('Lunes')
		expect(result.forecastDays[2].day).toBe('Miércoles')
	})

	test('logs an error and returns fallback when fetch throws', async () => {
		const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
		fetch.mockRejectedValue(new Error('Failed to get forecast data'))

		const result = await getForecastDays()

		expect(consoleSpy).toHaveBeenCalledWith(
			'Failed to get forecast data',
			expect.any(Error)
		)
		expect(result).toEqual(FALLBACK_FORECAST_DATA)

		consoleSpy.mockRestore()
	})

	test('logs an error and returns fallback when response is not ok', async () => {
		const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

		fetch.mockResolvedValueOnce({
			ok: false,
			json: jest.fn()
		})

		const result = await getForecastDays()

		expect(consoleSpy).toHaveBeenCalledWith(
			'Failed to get forecast data',
			expect.any(Error)
		)
		expect(result).toEqual(FALLBACK_FORECAST_DATA)

		consoleSpy.mockRestore()
	})

	test('returns fallback when forecastDays property is missing', async () => {
		const mockApiResponse = {}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		const result = await getForecastDays()

		expect(result).toEqual(FALLBACK_FORECAST_DATA)
	})
})

describe('FALLBACK_FORECAST_DATA', () => {
	test('has valid fallback structure with 3 days', () => {
		expect(FALLBACK_FORECAST_DATA.forecastDays).toHaveLength(3)
		expect(FALLBACK_FORECAST_DATA.forecastDays[0]).toEqual({
			day: 'Viernes',
			type: 'cloudy',
			temp: '20°/26°',
			detail: '74% Nub'
		})
	})

	test('contains correct default values', () => {
		const days = FALLBACK_FORECAST_DATA.forecastDays
		expect(days[1].day).toBe('Sábado')
		expect(days[2].type).toBe('sunny')
		expect(days[2].detail).toContain('Sol')
	})
})
