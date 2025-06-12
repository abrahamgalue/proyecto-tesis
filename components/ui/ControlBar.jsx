import { View, TouchableOpacity } from 'react-native'
import ActionBar from '@/components/ui/ActionBar'
import { DeleteBtnIcon, EditBtnIcon } from '@/components/ui/Icons/Icons'
import { useEdit, useEditActions } from '@/store/editStore'
import { Image } from '@/components/image'

const ControlBarBtn = () => {
	const edit = useEdit()
	const { toggleEdited } = useEditActions()

	return (
		<TouchableOpacity
			onPress={toggleEdited}
			hitSlop={{ bottom: 4, top: 4, left: 5, right: 5 }}
		>
			{edit ? <DeleteBtnIcon /> : <EditBtnIcon />}
		</TouchableOpacity>
	)
}

const ControlBar = () => {
	return (
		<ActionBar className='relative justify-start px-10 py-1'>
			<ControlBarBtn />
			<View className='absolute -right-6 -top-1/2'>
				<Image
					className='h-36 w-36'
					source={require('@/assets/logo-raw.png')}
					style={{ contentFit: 'contain' }}
				/>
			</View>
		</ActionBar>
	)
}

export default ControlBar
