import { memo, useCallback } from 'react'
import {
	View,
	TouchableOpacity,
	Switch,
	useWindowDimensions
} from 'react-native'
import { Link } from 'expo-router'
import {
	BombIcon,
	ConnectedIcon,
	EditIcon,
	LightBulbIcon
} from '@/components/ui/Icons/Icons'
import { cn } from '@/lib/utils'
import { Text } from '@/components/text'
import { useEdit } from '@/store/editStore'
import { useDevicesActions } from '@/store/devicesStore'

const icons = {
	bomb: BombIcon,
	light: LightBulbIcon
}

const Device = memo(function Device({ item, num }) {
	const isEdit = useEdit()
	const { toggleEnableDevices } = useDevicesActions()

	const isEnabled = item.isOn
	const toggleSwitch = useCallback(
		() => toggleEnableDevices(item.id),
		[item.id]
	)

	const { width } = useWindowDimensions()
	const itemSize = (width - 96) / 2

	const IconComponent = icons[item.type] || icons.bomb

	return (
		<View className='relative'>
			{isEdit && (
				<Link href={`/control/edit/${item.id}`} asChild>
					<TouchableOpacity
						className='absolute z-20 m-2 items-center justify-center rounded-lg border border-border'
						style={{ width: itemSize, height: itemSize }}
					>
						<EditIcon />
					</TouchableOpacity>
				</Link>
			)}

			<View
				className={cn(
					'relative z-10 m-2 rounded-lg border border-border bg-white/20 p-4 dark:bg-[#082D33]/80',
					{ 'opacity-10': isEdit }
				)}
				style={{ width: itemSize, height: itemSize }}
			>
				<View className='h-12 flex-row items-start justify-between'>
					<View className='ml-2'>
						<IconComponent />
					</View>
					<ConnectedIcon />
				</View>
				<Text className='text-lg font-bold text-foreground'>
					{item.name} #{num}
				</Text>
				<Text className='text-xs text-muted-foreground'>{item.location}</Text>
				<View className='flex-1 items-end justify-end'>
					<Switch
						disabled={isEdit}
						trackColor={{ false: '#ffffff', true: '#0fb1ff' }}
						thumbColor={isEnabled ? '#ffffff' : '#757575'}
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
			</View>
		</View>
	)
})

export default Device
