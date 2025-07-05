import { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { useEdit, useEditActions } from '@/store/editStore'
import DeleteBtn from '@/components/icons/DeleteBtn'
import EditBtn from '@/components/icons/EditBtn'

function ControlBarBtn() {
	const edit = useEdit()
	const { toggleEdited } = useEditActions()

	return (
		<TouchableOpacity
			onPress={toggleEdited}
			hitSlop={{ bottom: 4, top: 4, left: 5, right: 5 }}
		>
			{edit ? <DeleteBtn /> : <EditBtn />}
		</TouchableOpacity>
	)
}

export default memo(ControlBarBtn)
