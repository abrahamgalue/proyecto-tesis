import { View } from 'react-native'
import { Text } from '@/components/text'

function Footer() {
	return (
		<View className='flex-row gap-1'>
			<Text className='text-sm font-bold tracking-[1px] text-foreground'>
				GREENWALL
			</Text>
			<Text className='text-sm font-bold tracking-[1px] text-border'>
				MANAGER
			</Text>
		</View>
	)
}

export default Footer
