import { memo } from 'react'
import { View } from 'react-native'
import { useEdit } from '@/store/editStore'
import useModal from '@/hooks/useModal'
import ModalLightbulb from '@/components/ui/ModalLightbulb'
import LightColor from './LightColor'
import LightLevel from './LightLevel'
import EditBtn from '@/components/ui/EditBtn'
import DeviceContent from '@/components/ui/DeviceContent'
import SettingsLightBtn from '@/components/ui/SettingsLightBtn'

function Device({ item, num, itemSize }) {
	const isEdit = useEdit()
	const isLight = item.type === 'light'

	const { visible, handleShowModal, handleHideModal } = useModal()

	return (
		<View className='relative'>
			{isLight && (
				<ModalLightbulb
					visible={visible}
					onClose={handleHideModal}
					title={`${item.name} #${num}`}
				>
					<LightColor deviceId={item.id} color={item.color} />
					<LightLevel deviceId={item.id} brightness={item.brightness} />
				</ModalLightbulb>
			)}

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
