import { ForecastType } from '@/features/weather/type'

import SunCloudSmall from '@/components/icons/SunCloudSmall'
import Sunny from '@/components/icons/Sunny'
import Rainy from '@/components/icons/Rainy'

export const forecastIcons = {
	[ForecastType.Sunny]: Sunny,
	[ForecastType.Cloudy]: SunCloudSmall,
	[ForecastType.Rainy]: Rainy
}

export function getForecastIcon(type: ForecastType) {
	return forecastIcons[type] || Sunny
}
