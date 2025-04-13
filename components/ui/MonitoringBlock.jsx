import { View, Text } from 'react-native'
import { IconSymbol } from './IconSymbol'

function MonitoringBlock({ icon, value, label }) {
	return (
		<View className='w-[48%] gap-2 flex-row px-2.5 items-start mb-[15px]'>
			<IconSymbol name={icon} size={42} color='#a1a1aa' />
			<View className='flex-1 items-start'>
				<Text className='text-foreground text-lg font-bold'>{value}</Text>
				<Text className='text-foreground text-sm'>{label}</Text>
			</View>
		</View>
	)
}

export default MonitoringBlock
