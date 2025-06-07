import { View } from 'react-native'
import { Text } from '@/components/text'

export default function Modal() {
	return (
		<View className='flex flex-1 items-center justify-center gap-y-4 bg-background p-4'>
			<Text className='text-center text-4xl font-extrabold tracking-tight text-foreground web:select-text web:scroll-m-20 lg:text-5xl'>
				Modal
			</Text>
			<Text className='text-center text-sm text-muted-foreground web:select-text'>
				Esta es una pantalla modal.
			</Text>
		</View>
	)
}
