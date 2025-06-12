import { View, Modal, Pressable } from 'react-native'
import { Text } from '@/components/text'
import CardTitle from '@/components/ui/CardTitle'
import BackBtn from './BackBtn'

function ModalLightbulb({ visible, onClose, title = 'Modal', children }) {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={visible}
			statusBarTranslucent={true}
			onRequestClose={onClose}
		>
			<View className='flex-1 items-center justify-center bg-[#0c2229c7] px-[5%]'>
				<View className='relative h-[50%] w-full items-center justify-center gap-4 rounded-3xl border border-border bg-[#0c2229]'>
					<CardTitle>{title}</CardTitle>
					<BackBtn
						className='absolute right-5 top-5'
						hitSlop={20}
						onPress={onClose}
					/>
					{children}
					<Pressable
						accessibilityRole='button'
						className='absolute -bottom-5 w-[70%] rounded-full bg-border p-4'
						onPress={onClose}
					>
						<Text className='text-center text-foreground'>Aceptar</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}

export default ModalLightbulb
