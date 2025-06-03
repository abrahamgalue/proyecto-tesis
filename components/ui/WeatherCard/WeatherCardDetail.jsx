import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import WeatherDetailBlock from '@/components/ui/WeatherCard/WeatherCardDetailBlock'
import { HumidityIcon } from '@/components/ui/Icons/Icons'
import { colors } from '@/constants/colors'

const WeatherCardDetail = memo(function WeatherCardDetail({ weatherData }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='flex items-center justify-center pt-8 pb-3 gap-3'>
			<WeatherDetailBlock
				icon={
					<HumidityIcon
						width={25}
						height={25}
						color={
							isDarkColorScheme
								? colors.dark.foreground
								: colors.light.foreground
						}
					/>
				}
				label='Velocidad del Viento'
				value={weatherData.wind.speed}
				unit={weatherData.wind.unit}
			/>
			<WeatherDetailBlock
				icon={
					<HumidityIcon
						width={25}
						height={25}
						color={
							isDarkColorScheme
								? colors.dark.foreground
								: colors.light.foreground
						}
					/>
				}
				label='Indice UV'
				value={weatherData.UV.index}
				unit={weatherData.UV.state}
			/>
			<WeatherDetailBlock
				icon={
					<HumidityIcon
						width={25}
						height={25}
						color={
							isDarkColorScheme
								? colors.dark.foreground
								: colors.light.foreground
						}
					/>
				}
				label='Sensación Térmica'
				value={weatherData.sensationThermal}
				unit='°C'
				isLargeText={true}
			/>
		</View>
	)
})

export default WeatherCardDetail
