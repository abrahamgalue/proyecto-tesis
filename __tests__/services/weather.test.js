import {
	formatTemp,
	formatSpeedWind,
	formatUVIndex,
	formatSensation
} from '@/lib/formatters'
import { getWeatherData, FALLBACK_WEATHER_DATA } from '@/services/weather'

jest.mock('@/lib/formatters', () => ({
	formatTemp: jest.fn(),
	formatSpeedWind: jest.fn(),
	formatUVIndex: jest.fn(),
	formatSensation: jest.fn()
}))

describe('getWeatherData', () => {
	beforeEach(() => {
		global.fetch = jest.fn()
		jest.clearAllMocks()
	})

	test('fetches and formats weather data correctly', async () => {
		const mockApiResponse = {
			temperaturaExterior: '32,5',
			humedad: '55%',
			velocidadViento: '20 km/h',
			indiceUV: '5,3',
			sensacionTermicaSol: '29.8'
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		formatTemp.mockReturnValue('32')
		formatUVIndex.mockReturnValue({ index: '5.3', state: 'Moderado' })
		formatSpeedWind.mockReturnValue({ speed: '20', unit: 'km/h' })
		formatSensation.mockReturnValue('29')

		const result = await getWeatherData()

		expect(fetch).toHaveBeenCalledWith(
			'https://cloud.urbe.edu/web/v1/core/weather'
		)
		expect(formatTemp).toHaveBeenCalledWith('32,5')
		expect(formatUVIndex).toHaveBeenCalledWith('5,3')
		expect(formatSpeedWind).toHaveBeenCalledWith('20 km/h')
		expect(formatSensation).toHaveBeenCalledWith('29.8')

		expect(result).toEqual({
			tempOutside: '32',
			humidity: '55%',
			UV: { index: '5.3', state: 'Moderado' },
			wind: { speed: '20', unit: 'km/h' },
			sensationThermal: '29'
		})
	})

	test('logs an error and throw error on failure', async () => {
		const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
		fetch.mockRejectedValue(new Error('Failed to get weather data'))

		await expect(getWeatherData()).rejects.toThrow('Failed to get weather data')

		expect(consoleSpy).toHaveBeenCalledWith(
			'Failed to get weather data',
			expect.any(Error)
		)

		consoleSpy.mockRestore()
	})

	test('throws error when response is not ok', async () => {
		const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

		fetch.mockResolvedValueOnce({
			ok: false,
			json: jest.fn()
		})

		await expect(getWeatherData()).rejects.toThrow(
			'No se pudieron obtener los datos del clima'
		)

		expect(consoleSpy).toHaveBeenCalledWith(
			'Failed to get weather data',
			expect.any(Error)
		)

		consoleSpy.mockRestore()
	})
})

describe('FALLBACK_WEATHER_DATA', () => {
	test('has valid fallback values', () => {
		expect(FALLBACK_WEATHER_DATA).toEqual({
			tempOutside: '32',
			humidity: '60%',
			UV: { index: '1.3', state: 'Bajo' },
			wind: { speed: '40', unit: 'km/h' },
			sensationThermal: '30'
		})
	})
})
