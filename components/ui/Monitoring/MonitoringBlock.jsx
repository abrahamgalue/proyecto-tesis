import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'

const MonitoringBlock = memo(function MonitoringBlock({ icon, value, label }) {
	return (
		<View className='w-[48%] gap-2 flex-row px-2.5 items-start mb-[15px]'>
			<View className=''>{icon}</View>
			<View className='flex-1 items-start'>
				<Text className='text-foreground text-lg font-bold'>{value}</Text>
				<Text className='text-foreground text-sm'>{label}</Text>
			</View>
		</View>
	)
})

export default MonitoringBlock
