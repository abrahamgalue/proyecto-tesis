import { memo } from 'react'
import { View } from 'react-native'
import { useEdit } from '@/store/editStore'
import EditBtn from '@/features/devices/components/list/EditBtn'
import DeviceContent from '@/features/devices/components/list/DeviceContent'
import LightBtn from '@/features/devices/components/list/LightBtn'

function Device({ item, num, itemSize }) {
	const isEdit = useEdit()
	const isLight = item.type === 'light'

	return (
		<View className='relative'>
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

			{isLight && <LightBtn width={itemSize} id={item.id} num={num} />}
		</View>
	)
}

export default memo(Device)
