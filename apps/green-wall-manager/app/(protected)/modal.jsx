import { View } from 'react-native'
import { Text } from '@/components/ui/text'

export default function Modal() {
	return (
		<View className='bg-brand-primary flex flex-1 items-center justify-center gap-y-4 p-4'>
			<Text className='text-foreground-primary web:select-text web:scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
				Modal
			</Text>
			<Text className='text-foreground-primary web:select-text text-center text-sm'>
				Esta es una pantalla modal.
			</Text>
		</View>
	)
}
