import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { GenericSkeleton } from '@/components/ui/skeletons'

function WeatherCardInfo({ data, isLoading }) {
	return (
		<View className='mb-5 flex-row items-end justify-center gap-2'>
			<View className='items-center'>
				{!isLoading ? (
					<Text className='font-semi-bold text-[92px] leading-[100px] text-foreground-primary'>
						{data.tempOutside}°
					</Text>
				) : (
					<GenericSkeleton width={155} height={100} />
				)}
				<Text className='text-base text-foreground-primary'>Nublado</Text>
			</View>
			<View className='items-start justify-center'>
				{!isLoading ? (
					<Text className='text-lg font-bold text-foreground-primary'>
						{data.humidity}
					</Text>
				) : (
					<GenericSkeleton width={40} height={20} />
				)}
				<Text className='text-sm text-foreground-primary'>Humedad</Text>
			</View>
		</View>
	)
}

export default memo(WeatherCardInfo)
