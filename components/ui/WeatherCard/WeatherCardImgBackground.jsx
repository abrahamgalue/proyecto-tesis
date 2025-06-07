import { memo } from 'react'
import { View } from 'react-native'
import { Image } from '@/components/image'

const WeatherCardImgBackground = memo(function WeatherCardImgBackground() {
	return (
		<View className='absolute bottom-10 right-0 h-full w-full overflow-hidden rounded-3xl'>
			<Image
				className='absolute -bottom-24 -right-36 h-[400px] w-[400px] opacity-10'
				source={require('@/assets/logo-raw.png')}
				style={{ contentFit: 'contain' }}
			/>
		</View>
	)
})

export default WeatherCardImgBackground
