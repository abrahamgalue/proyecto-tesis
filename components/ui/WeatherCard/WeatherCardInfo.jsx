import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'
import { GenericSkeleton } from '@/components/ui/skeletons'

function WeatherCardInfo({ data, isLoading }) {
	return (
		<View className='mb-5 flex-row items-end justify-center gap-2'>
			<View className='items-center'>
				{!isLoading ? (
					<Text className='font-semi-bold text-foreground-primary text-[92px] leading-[100px]'>
						{data.tempOutside}°
					</Text>
				) : (
					<GenericSkeleton width={155} height={100} />
				)}
				<Text className='text-foreground-primary text-base'>Nublado</Text>
			</View>
			<View className='items-start justify-center'>
				{!isLoading ? (
					<Text className='text-foreground-primary text-lg font-bold'>
						{data.humidity}
					</Text>
				) : (
					<GenericSkeleton width={40} height={20} />
				)}
				<Text className='text-foreground-primary text-sm'>Humedad</Text>
			</View>
		</View>
	)
}

export default memo(WeatherCardInfo)
