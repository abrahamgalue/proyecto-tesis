import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'
import { GenericSkeleton } from '@/components/ui/skeletons'

const WeatherCardInfo = memo(function WeatherCardInfo({ weatherData }) {
	return (
		<View className='flex-row justify-center gap-2 items-end mb-5'>
			<View className='items-center'>
				{weatherData.tempOutside ? (
					<Text className='text-[92px] text-foreground font-semi-bold leading-[100px]'>
						{weatherData.tempOutside}°
					</Text>
				) : (
					<GenericSkeleton width={150} height={90} />
				)}
				<Text className='text-foreground text-base'>Nublado</Text>
			</View>
			<View className='items-start justify-center'>
				{weatherData.humidity ? (
					<Text className='text-lg text-foreground font-bold'>
						{weatherData.humidity}
					</Text>
				) : (
					<GenericSkeleton width={40} height={20} />
				)}
				<Text className='text-foreground text-sm'>Humedad</Text>
			</View>
		</View>
	)
})

export default WeatherCardInfo
