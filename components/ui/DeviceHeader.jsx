import { memo } from 'react'
import { View } from 'react-native'
import { ConnectedIcon } from '@/components/ui/Icons/Icons'
import { Text } from '@/components/text'

function DeviceHeader({ IconComponent, name, num, location }) {
	return (
		<>
			<View className='h-12 flex-row items-start justify-between'>
				<View className='ml-2'>
					<IconComponent />
				</View>
				<ConnectedIcon />
			</View>
			<Text className='text-lg font-bold text-foreground'>
				{name} #{num}
			</Text>
			<Text className='text-xs text-muted-foreground'>{location}</Text>
		</>
	)
}

export default memo(DeviceHeader)
