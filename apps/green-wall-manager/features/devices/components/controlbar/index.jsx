import { View } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import ActionBar from '@/components/ui/action-bar'
import ControlBarBtn from '@/features/devices/components/controlbar/ControlBarBtn'
import { Image } from '@/components/ui/image'

const ControlBar = () => {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<ActionBar className='relative justify-start px-10 py-1'>
			<ControlBarBtn />
			<View className='absolute -right-6 -top-1/2'>
				{isDarkColorScheme ? (
					<Image
						className='h-36 w-36'
						source={require('@/assets/images/logo-raw.png')}
						style={{ contentFit: 'contain' }}
					/>
				) : (
					<Image
						className='h-36 w-36'
						source={require('@/assets/images/logo.png')}
						style={{ contentFit: 'contain' }}
					/>
				)}
			</View>
		</ActionBar>
	)
}

export default ControlBar
