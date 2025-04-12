export const FALLBACK_WEATHER_DATA = {
	tempOutside: '32',
	humidity: '60%'
}

const WEATHER_API_URL = 'https://cloud.urbe.edu/web/v1/core/weather'

function formatTemp(temp) {
	return temp.split(',')[0]
}

export async function getWeatherData() {
	try {
		const res = await fetch(WEATHER_API_URL)
		const data = await res.json()

		const { temperaturaExterior, humedad } = data

		return { temperaturaExterior: formatTemp(temperaturaExterior), humedad }
	} catch (e) {
		console.log('Failed to get weather data', e)
	}
}
