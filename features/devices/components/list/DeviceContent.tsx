import { memo } from 'react'
import { Switch, View } from 'react-native'
import { type Device } from '@/features/devices/type'
import { getDeviceIcon } from '@/features/devices/lib/utils'
import { useDevicesActions } from '@/store/devicesStore'
import DeviceHeader from '@/features/devices/components/list/DeviceHeader'

interface Props {
	item: Device
	num: number
	itemSize: number
}

function DeviceContent({ item, num, itemSize }: Props) {
	const Icon = getDeviceIcon(item.type)
	const isEnabled = item.isOn
	const { toggleEnableDevices } = useDevicesActions()

	return (
		<View
			className='relative m-2 rounded-lg border border-primary bg-device-primary p-4'
			style={{ width: itemSize, height: itemSize }}
		>
			<DeviceHeader
				icon={<Icon />}
				name={item.name}
				num={num}
				location={item.location}
			/>
			<View className='flex-1 items-end justify-end'>
				<Switch
					trackColor={{ false: '#ffffff', true: '#0fb1ff' }}
					thumbColor={isEnabled ? '#ffffff' : '#757575'}
					onValueChange={() => toggleEnableDevices(item.id)}
					value={isEnabled}
				/>
			</View>
		</View>
	)
}

export default memo(DeviceContent)
