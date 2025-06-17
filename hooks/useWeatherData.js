import { useQuery } from '@tanstack/react-query'
import { FALLBACK_WEATHER_DATA, getWeatherData } from '@/lib/weather'

const useWeatherData = () => {
	const { data, isLoading, isError } = useQuery({
		queryFn: getWeatherData,
		queryKey: ['weather'],
		staleTime: 1000 * 60 * 30
	})

	const weatherData = isError ? FALLBACK_WEATHER_DATA : data

	return { data: weatherData, isLoading, isError }
}

export default useWeatherData
