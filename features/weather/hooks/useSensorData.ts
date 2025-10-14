import { useQuery } from '@tanstack/react-query'
import { FALLBACK_SENSOR_DATA, getSensorData } from '@/services/sensor'

const useSensorData = () => {
	const { data, isLoading, isError } = useQuery({
		queryFn: async () => {
			console.log('[ESP32] Solicitando los datos de sensores al ESP32...')
			const result = await getSensorData()
			console.log('[ESP32] Datos de los sensores recibidos del ESP32.')
			return result
		},
		queryKey: ['sensor'],
		staleTime: 1000 * 60 * 30
	})

	const sensorData = isError ? FALLBACK_SENSOR_DATA : data

	if (isError) {
		console.error(
			'[ESP32] Error al obtener los datos de los sensores del ESP32. Usando datos de respaldo.'
		)
	}

	return { data: sensorData, isLoading, isError }
}

export default useSensorData
