import { memo } from 'react'
import { View } from 'react-native'
import { cn } from '@/lib/utils'
import { Image } from '@/components/image'

const CardImgBackground = memo(function CardImgBackground({ imgClassName }) {
	const imgStylesClass = cn(
		'absolute bottom-10 right-0 h-full w-full overflow-hidden rounded-3xl',
		imgClassName
	)

	return (
		<View className={imgStylesClass}>
			<Image
				className='absolute -bottom-24 -right-36 h-[400px] w-[400px] opacity-10'
				source={require('@/assets/logo-raw.png')}
				style={{ contentFit: 'contain' }}
			/>
		</View>
	)
})

export default CardImgBackground
