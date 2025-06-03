import { memo } from 'react'
import { View } from 'react-native'
import { Image } from '@/components/image'

const WeatherCardImgBackground = memo(function WeatherCardImgBackground() {
	return (
		<View className='absolute w-full h-full rounded-3xl overflow-hidden bottom-10 right-0'>
			<Image
				className='w-[400px] h-[400px] absolute -bottom-24 -right-36 opacity-10'
				source={require('@/assets/logo-raw.png')}
				style={{ contentFit: 'contain' }}
			/>
		</View>
	)
})

export default WeatherCardImgBackground
