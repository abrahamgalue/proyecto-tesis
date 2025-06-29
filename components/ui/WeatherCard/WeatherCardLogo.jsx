import { memo } from 'react'
import { useColorScheme } from '@/lib/useColorScheme'
import { Image } from '@/components/image'

function WeatherCardLogo() {
	const { isDarkColorScheme } = useColorScheme()

	return isDarkColorScheme ? (
		<Image
			className='absolute -right-3 -top-11 h-20 w-20'
			source={require('@/assets/images/logo-raw.png')}
			style={{ contentFit: 'contain' }}
		/>
	) : (
		<Image
			className='absolute -right-3 -top-11 h-20 w-20'
			source={require('@/assets/images/logo.png')}
			style={{ contentFit: 'contain' }}
		/>
	)
}

export default memo(WeatherCardLogo)
