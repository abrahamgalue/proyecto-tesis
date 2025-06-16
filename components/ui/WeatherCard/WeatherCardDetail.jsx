import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/lib/useColorScheme'
import WeatherDetailBlock from '@/components/ui/WeatherCard/WeatherCardDetailBlock'
import { HumidityIcon } from '@/components/ui/Icons/Icons'
import { colors } from '@/constants/colors'
import { GenericSkeleton } from '../skeletons'

const WeatherCardDetail = memo(function WeatherCardDetail({ weatherData }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='flex items-center justify-center gap-3 pb-3 pt-8'>
			{weatherData.wind ? (
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
			) : (
				<GenericSkeleton className='w-full rounded-2xl' height={80} />
			)}
			{weatherData.UV ? (
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
			) : (
				<GenericSkeleton className='w-full rounded-2xl' height={80} />
			)}

			{weatherData.sensationThermal ? (
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
			) : (
				<GenericSkeleton className='w-full rounded-2xl' height={80} />
			)}
		</View>
	)
})

export default WeatherCardDetail
