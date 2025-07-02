import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import WeatherDetailBlock from '@/components/ui/WeatherCard/WeatherCardDetailBlock'
import Humidity from '@/components/icons/Humidity'
import { colors } from '@/constants/colors'
import { GenericSkeleton } from '../skeletons'

function WeatherCardDetail({ data, isLoading }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='flex items-center justify-center gap-3 pb-3 pt-8'>
			{!isLoading ? (
				<WeatherDetailBlock
					icon={
						<Humidity
							width={25}
							height={25}
							color={
								isDarkColorScheme
									? colors.dark.textForegroundPrimary
									: colors.light.textForegroundPrimary
							}
						/>
					}
					label='Velocidad del Viento'
					value={data.wind.speed}
					unit={data.wind.unit}
				/>
			) : (
				<GenericSkeleton className='w-full rounded-2xl' height={80} />
			)}
			{!isLoading ? (
				<WeatherDetailBlock
					icon={
						<Humidity
							width={25}
							height={25}
							color={
								isDarkColorScheme
									? colors.dark.textForegroundPrimary
									: colors.light.textForegroundPrimary
							}
						/>
					}
					label='Indice UV'
					value={data.UV.index}
					unit={data.UV.state}
				/>
			) : (
				<GenericSkeleton className='w-full rounded-2xl' height={80} />
			)}

			{!isLoading ? (
				<WeatherDetailBlock
					icon={
						<Humidity
							width={25}
							height={25}
							color={
								isDarkColorScheme
									? colors.dark.textForegroundPrimary
									: colors.light.textForegroundPrimary
							}
						/>
					}
					label='Sensación Térmica'
					value={data.sensationThermal}
					unit='°C'
					isLargeText={true}
				/>
			) : (
				<GenericSkeleton className='w-full rounded-2xl' height={80} />
			)}
		</View>
	)
}

export default memo(WeatherCardDetail)
