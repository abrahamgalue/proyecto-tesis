import { View } from 'react-native'
import { Text } from '@/components/ui/text'

function Footer() {
	return (
		<View className='flex-row gap-1'>
			<Text className='text-foreground-primary text-sm font-bold tracking-[1px]'>
				GREENWALL
			</Text>
			<Text className='text-foreground-tertiary text-sm font-bold tracking-[1px]'>
				MANAGER
			</Text>
		</View>
	)
}

export default Footer
