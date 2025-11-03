export const FALLBACK_SENSOR_DATA = {
	waterLevel: '60%',
	soilTemp: '25°C',
	substrateTemp: '20°C',
	phLevel: '6,83',
	waterFlowObstruction: '05%'
}

const SENSOR_API_URL = 'https://api-sensores-jc-b8.vercel.app/api/sensors'

export async function getSensorData() {
	try {
		const res = await fetch(SENSOR_API_URL)
		if (!res.ok)
			throw new Error('No se pudieron obtener los datos de los sensores')

		const data = await res.json()

		return {
			waterLevel: data.waterLevel ?? FALLBACK_SENSOR_DATA.waterLevel,
			soilTemp: data.soilTemp ?? FALLBACK_SENSOR_DATA.soilTemp,
			substrateTemp: data.substrateTemp ?? FALLBACK_SENSOR_DATA.substrateTemp,
			phLevel: data.phLevel ?? FALLBACK_SENSOR_DATA.phLevel,
			waterFlowObstruction:
				data.waterFlowObstruction ?? FALLBACK_SENSOR_DATA.waterFlowObstruction
		}
	} catch (e) {
		console.error('Failed to get sensor data', e)
		throw e
	}
}
