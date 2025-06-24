import { memo } from 'react'
import { Switch, View } from 'react-native'
import { icons } from '@/constants/style'
import { useDevicesActions } from '@/store/devicesStore'
import DeviceHeader from '@/components/ui/DeviceHeader'

function DeviceContent({ item, num, itemSize }) {
	const Icon = icons[item.type] || icons.bomb
	const isEnabled = item.isOn
	const { toggleEnableDevices } = useDevicesActions()

	return (
		<View
			className='relative m-2 rounded-lg border border-border bg-white/20 p-4 dark:bg-[#082D33]/80'
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
