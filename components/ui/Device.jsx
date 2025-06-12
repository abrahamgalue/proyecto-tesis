import { memo, useCallback, useState } from 'react'
import { View } from 'react-native'
import { useEdit } from '@/store/editStore'
import ModalLightbulb from '@/components/ui/ModalLightbulb'
import { Text } from '@/components/text'
import EditBtn from '@/components/ui/EditBtn'
import DeviceContent from '@/components/ui/DeviceContent'
import SettingsLightBtn from '@/components/ui/SettingsLightBtn'

function Device({ item, num, itemSize }) {
	const isEdit = useEdit()
	const isLight = item.type === 'light'

	const [modalVisible, setModalVisible] = useState(false)

	const handleShowModal = useCallback(() => setModalVisible(true), [])
	const handleHideModal = useCallback(() => setModalVisible(false), [])

	return (
		<View className='relative'>
			<ModalLightbulb
				visible={modalVisible}
				onClose={handleHideModal}
				title={`${item.name} #${num}`}
			>
				<Text className='text-foreground'>Texto dentro de modal</Text>
			</ModalLightbulb>

			{isEdit && (
				<EditBtn
					href={`/control/edit/${item.id}`}
					width={itemSize}
					height={itemSize}
				/>
			)}

			<View style={{ opacity: isEdit ? 0.1 : 1 }}>
				<DeviceContent item={item} num={num} itemSize={itemSize} />
			</View>

			{isLight && (
				<SettingsLightBtn width={itemSize} handlePress={handleShowModal} />
			)}
		</View>
	)
}

export default memo(Device)
