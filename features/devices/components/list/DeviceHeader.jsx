import { memo } from 'react'
import { View } from 'react-native'
import Connected from '@/components/icons/Connected'
import { Text } from '@/components/ui/text'

function DeviceHeader({ icon, name, num, location }) {
	return (
		<>
			<View className='h-12 flex-row items-start justify-between'>
				<View className='ml-2'>{icon}</View>
				<Connected />
			</View>
			<Text className='text-lg font-bold text-foreground-primary'>
				{name} #{num}
			</Text>
			<Text className='text-xs text-foreground-secondary'>{location}</Text>
		</>
	)
}

export default memo(DeviceHeader)
