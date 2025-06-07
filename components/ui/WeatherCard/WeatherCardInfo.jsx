import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'
import { GenericSkeleton } from '@/components/ui/skeletons'

const WeatherCardInfo = memo(function WeatherCardInfo({ weatherData }) {
	return (
		<View className='mb-5 flex-row items-end justify-center gap-2'>
			<View className='items-center'>
				{weatherData.tempOutside ? (
					<Text className='font-semi-bold text-[92px] leading-[100px] text-foreground'>
						{weatherData.tempOutside}°
					</Text>
				) : (
					<GenericSkeleton width={150} height={90} />
				)}
				<Text className='text-base text-foreground'>Nublado</Text>
			</View>
			<View className='items-start justify-center'>
				{weatherData.humidity ? (
					<Text className='text-lg font-bold text-foreground'>
						{weatherData.humidity}
					</Text>
				) : (
					<GenericSkeleton width={40} height={20} />
				)}
				<Text className='text-sm text-foreground'>Humedad</Text>
			</View>
		</View>
	)
})

export default WeatherCardInfo
