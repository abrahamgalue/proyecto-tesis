import { View } from 'react-native'
import { Text } from '@/components/ui/text'

function Footer() {
	return (
		<View className='flex-row gap-1'>
			<Text className='text-sm font-bold tracking-[1px] text-foreground-primary'>
				GREENWALL
			</Text>
			<Text className='text-sm font-bold tracking-[1px] text-foreground-tertiary'>
				MANAGER
			</Text>
		</View>
	)
}

export default Footer
