import { memo } from 'react'
import { View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import WeatherDetailBlock from '@/features/weather/components/weathercard/WeatherCardDetailBlock'
import Wind from '@/components/icons/Wind'
import Sun from '@/components/icons/Sun'
import ThermalSensation from '@/components/icons/ThermalSensation'
import { colors } from '@/constants/colors'
import { GenericSkeleton } from '@/components/ui/skeletons'

function WeatherCardDetail({ data, isLoading }) {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<View className='flex items-center justify-center gap-3 pb-3 pt-8'>
			{!isLoading ? (
				<WeatherDetailBlock
					icon={
						<Wind
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
						<Sun
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
						<ThermalSensation
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
