import { env } from '@/data/env/client'

import {
	formatSensation,
	formatSpeedWind,
	formatTemp,
	formatUVIndex
} from '@/lib/formatters'

export const FALLBACK_WEATHER_DATA = {
	tempOutside: '32',
	humidity: '60%',
	UV: { index: '1.3', state: 'Bajo' },
	wind: { speed: '40', unit: 'km/h' },
	sensationThermal: '30'
}

const WEATHER_API_URL = env.WEATHER_API_URL

export async function getWeatherData() {
	try {
		const res = await fetch(WEATHER_API_URL)
		if (!res.ok) throw new Error('No se pudieron obtener los datos del clima')

		const data = await res.json()

		const {
			temperaturaExterior,
			humedad,
			velocidadViento,
			indiceUV,
			sensacionTermicaSol
		} = data

		return {
			tempOutside: formatTemp(temperaturaExterior),
			humidity: humedad ?? FALLBACK_WEATHER_DATA.humidity,
			UV: formatUVIndex(indiceUV),
			wind: formatSpeedWind(velocidadViento),
			sensationThermal: formatSensation(sensacionTermicaSol)
		}
	} catch (e) {
		console.error('Failed to get weather data', e)
		throw e
	}
}
