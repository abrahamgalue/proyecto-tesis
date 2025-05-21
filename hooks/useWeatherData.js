import { useState, useEffect } from 'react'
import { getWeatherData, FALLBACK_WEATHER_DATA } from '@/lib/weather'

const useWeatherData = () => {
	const [weatherData, setWeatherData] = useState({})

	useEffect(() => {
		let ignore = false

		getWeatherData()
			.then(({ tempOutside, humidity, UV, wind, sensationThermal }) => {
				if (!ignore) {
					setWeatherData({
						tempOutside,
						humidity,
						UV,
						wind,
						sensationThermal
					})
				}
			})
			.catch(() => {
				if (!ignore) {
					setWeatherData(FALLBACK_WEATHER_DATA)
				}
			})

		return () => {
			ignore = true
		}
	}, [])

	return { weatherData }
}

export default useWeatherData
