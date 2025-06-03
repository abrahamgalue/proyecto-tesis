import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'

const Footer = memo(function Footer() {
	return (
		<View className='flex-row gap-1'>
			<Text className='text-foreground text-sm font-bold tracking-[1px]'>
				GREENWALL
			</Text>
			<Text className='text-border text-sm font-bold tracking-[1px]'>
				MANAGER
			</Text>
		</View>
	)
})

export default Footer
