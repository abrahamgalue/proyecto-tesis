import { env } from '@/data/env/client'
import { getSensorData, FALLBACK_SENSOR_DATA } from '@/services/sensor'

const SENSOR_API_URL = env.SENSOR_API_URL

describe('getSensorData', () => {
	beforeEach(() => {
		global.fetch = jest.fn()
		jest.clearAllMocks()
	})

	test('fetches sensor data correctly', async () => {
		const mockApiResponse = {
			waterLevel: '60%',
			soilTemp: '25°C',
			substrateTemp: '20°C',
			phLevel: '6,83',
			waterFlowObstruction: '05%'
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		const result = await getSensorData()

		expect(fetch).toHaveBeenCalledWith(SENSOR_API_URL)

		expect(result).toEqual({
			waterLevel: '60%',
			soilTemp: '25°C',
			substrateTemp: '20°C',
			phLevel: '6,83',
			waterFlowObstruction: '05%'
		})
	})

	test('logs an error and throw error on failure', async () => {
		const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
		fetch.mockRejectedValue(new Error('Failed to get sensor data'))

		await expect(getSensorData()).rejects.toThrow('Failed to get sensor data')

		expect(consoleSpy).toHaveBeenCalledWith(
			'Failed to get sensor data',
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

		await expect(getSensorData()).rejects.toThrow(
			'No se pudieron obtener los datos de los sensores'
		)

		expect(consoleSpy).toHaveBeenCalledWith(
			'Failed to get sensor data',
			expect.any(Error)
		)

		consoleSpy.mockRestore()
	})
})

describe('FALLBACK_SENSOR_DATA', () => {
	test('has valid fallback values', () => {
		expect(FALLBACK_SENSOR_DATA).toEqual({
			waterLevel: '60%',
			soilTemp: '25°C',
			substrateTemp: '20°C',
			phLevel: '6,83',
			waterFlowObstruction: '05%'
		})
	})

	test('uses fallback values when API does not return sensor data fields', async () => {
		const mockApiResponse = {
			waterLevel: undefined,
			soilTemp: undefined,
			substrateTemp: undefined,
			phLevel: undefined,
			waterFlowObstruction: undefined
		}

		fetch.mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValue(mockApiResponse)
		})

		const result = await getSensorData()

		expect(result).toEqual(FALLBACK_SENSOR_DATA)
	})
})
