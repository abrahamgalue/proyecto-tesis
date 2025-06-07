import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'

const MonitoringBlock = memo(function MonitoringBlock({ icon, value, label }) {
	return (
		<View className='mb-[15px] w-[48%] flex-row items-start gap-2 px-2.5'>
			<View className=''>{icon}</View>
			<View className='flex-1 items-start'>
				<Text className='text-lg font-bold text-foreground'>{value}</Text>
				<Text className='text-sm text-foreground'>{label}</Text>
			</View>
		</View>
	)
})

export default MonitoringBlock
