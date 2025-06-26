import { View } from 'react-native'
import { Text } from '@/components/text'

export default function Modal() {
	return (
		<View className='bg-brand-primary flex flex-1 items-center justify-center gap-y-4 p-4'>
			<Text className='text-foreground-primary text-center text-4xl font-extrabold tracking-tight web:select-text web:scroll-m-20 lg:text-5xl'>
				Modal
			</Text>
			<Text className='text-foreground-primary text-center text-sm web:select-text'>
				Esta es una pantalla modal.
			</Text>
		</View>
	)
}
