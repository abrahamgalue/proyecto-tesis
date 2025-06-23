import { useQuery } from '@tanstack/react-query'
import { FALLBACK_WEATHER_DATA, getWeatherData } from '@/lib/weather'

const useWeatherData = () => {
	const { data, isLoading, isError } = useQuery({
		queryFn: async () => {
			console.log('[ESP32] Solicitando datos meteorológicos al ESP32...')
			const result = await getWeatherData()
			console.log('[ESP32] Datos meteorológicos recibidos del ESP32.')
			return result
		},
		queryKey: ['weather'],
		staleTime: 1000 * 60 * 30
	})

	const weatherData = isError ? FALLBACK_WEATHER_DATA : data

	if (isError) {
		console.log(
			'[ESP32] Error al obtener los datos meteorológicos del ESP32. Usando datos de respaldo.'
		)
	}

	return { data: weatherData, isLoading, isError }
}

export default useWeatherData
