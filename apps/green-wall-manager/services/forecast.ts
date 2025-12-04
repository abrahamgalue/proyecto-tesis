import { env } from '@/data/env/client'

interface ForecastDays {
	forecastDays: ForecastDay[]
}

interface ForecastDay {
	day: string
	type: string
	temp: string
	detail: string
}

export const FALLBACK_FORECAST_DATA: ForecastDays = {
	forecastDays: [
		{
			day: 'Viernes',
			type: 'cloudy',
			temp: '20°/26°',
			detail: '74% Nub'
		},
		{
			day: 'Sábado',
			type: 'sunny',
			temp: '26°/29°',
			detail: '83% Sol'
		},
		{
			day: 'Domingo',
			type: 'sunny',
			temp: '30°/34°',
			detail: '88% Sol'
		}
	]
}

const FORECAST_API_URL = env.FORECAST_API_URL

const EXPECTED_FORECAST_DAYS = 3

export async function getForecastDays(): Promise<ForecastDays> {
	try {
		const res = await fetch(FORECAST_API_URL)
		if (!res.ok)
			throw new Error('No se pudieron obtener los datos del pronóstico')

		const data: ForecastDays = await res.json()

		if (
			!data?.forecastDays ||
			data.forecastDays.length < EXPECTED_FORECAST_DAYS
		) {
			return FALLBACK_FORECAST_DATA
		}

		return {
			forecastDays: data.forecastDays.slice(0, EXPECTED_FORECAST_DAYS)
		}
	} catch (error) {
		console.error('Failed to get forecast data', error)
		return FALLBACK_FORECAST_DATA
	}
}
