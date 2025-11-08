import { useQuery } from '@tanstack/react-query'
import { FALLBACK_FORECAST_DATA, getForecastDays } from '@/services/forecast'

const useForecastData = () => {
	const { data, isLoading, isError } = useQuery({
		queryFn: async () => {
			console.log('[ESP32] Solicitando los datos del pronóstico al ESP32...')
			const result = await getForecastDays()
			console.log('[ESP32] Datos del pronóstico recibido del ESP32.')
			return result
		},
		queryKey: ['forecast'],
		staleTime: 1000 * 60 * 30
	})

	const forecastData = isError ? FALLBACK_FORECAST_DATA : data

	if (isError) {
		console.error(
			'[ESP32] Error al obtener los datos del pronóstico del ESP32. Usando datos de respaldo.'
		)
	}

	return { data: forecastData, isLoading, isError }
}

export default useForecastData
