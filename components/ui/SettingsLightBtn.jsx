import { memo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Settings from '@/components/icons/Settings'

function SettingsLightBtn({ width, handlePress }) {
	return (
		<View
			className='absolute bottom-0 left-2 z-20 items-center justify-center'
			style={{ width }}
		>
			<TouchableOpacity
				className='rounded-full bg-btn-secondary p-1'
				onPress={handlePress}
			>
				<Settings />
			</TouchableOpacity>
		</View>
	)
}

export default memo(SettingsLightBtn)
