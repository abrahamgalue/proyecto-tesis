import { memo, ReactNode } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'

interface Props {
	icon: ReactNode
	value: string
	label: string
}

function MonitoringBlock({ icon, value, label }: Props) {
	return (
		<View className='mb-[15px] w-[48%] flex-row items-start gap-2 px-2.5'>
			<View className=''>{icon}</View>
			<View className='flex-1 items-start'>
				<Text className='text-foreground-primary text-lg font-bold'>
					{value}
				</Text>
				<Text className='text-foreground-primary text-sm'>{label}</Text>
			</View>
		</View>
	)
}

export default memo(MonitoringBlock)
