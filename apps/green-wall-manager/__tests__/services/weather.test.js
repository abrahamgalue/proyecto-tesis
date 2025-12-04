import { env } from '@/data/env/client'
import {
	formatTemp,
	formatSpeedWind,
	formatUVIndex,
	formatSensation
} from '@/lib/formatters'
import { getWeatherData, FALLBACK_WEATHER_DATA } from '@/services/weather'

const WEATHER_API_URL = env.WEATHER_API_URL

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

		expect(fetch).toHaveBeenCalledWith(WEATHER_API_URL)
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

	test('uses fallback humidity when API does not return humidity', async () => {
		const mockApiResponse = {
			temperaturaExterior: '30,0',
			humedad: undefined,
			velocidadViento: '15 km/h',
			indiceUV: '2.1',
			sensacionTermicaSol: '28.5'
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		formatTemp.mockReturnValue('30')
		formatUVIndex.mockReturnValue({ index: '2.1', state: 'Bajo' })
		formatSpeedWind.mockReturnValue({ speed: '15', unit: 'km/h' })
		formatSensation.mockReturnValue('28')

		const result = await getWeatherData()

		expect(result.humidity).toBe(FALLBACK_WEATHER_DATA.humidity)
	})
})
