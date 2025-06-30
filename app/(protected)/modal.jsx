import { View } from 'react-native'
import { Text } from '@/components/ui/text'

export default function Modal() {
	return (
		<View className='flex flex-1 items-center justify-center gap-y-4 bg-brand-primary p-4'>
			<Text className='text-center text-4xl font-extrabold tracking-tight text-foreground-primary web:select-text web:scroll-m-20 lg:text-5xl'>
				Modal
			</Text>
			<Text className='text-center text-sm text-foreground-primary web:select-text'>
				Esta es una pantalla modal.
			</Text>
		</View>
	)
}
