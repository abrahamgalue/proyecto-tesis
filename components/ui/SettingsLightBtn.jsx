import { memo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { SettingsIcon } from '@/components/ui/Icons/Icons'

function SettingsLightBtn({ width, handlePress }) {
	return (
		<View
			className='absolute bottom-0 left-2 z-20 items-center justify-center'
			style={{ width }}
		>
			<TouchableOpacity
				className='bg-btn-secondary rounded-full p-1'
				onPress={handlePress}
			>
				<SettingsIcon />
			</TouchableOpacity>
		</View>
	)
}

export default memo(SettingsLightBtn)
