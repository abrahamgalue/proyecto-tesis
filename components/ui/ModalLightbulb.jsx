import { memo } from 'react'
import { View, Modal } from 'react-native'
import CardTitle from '@/components/ui/CardTitle'
import BackBtn from './BackBtn'
import Button from '@/components/Button'

function ModalLightbulb({ visible, onClose, title = 'Modal', children }) {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={visible}
			statusBarTranslucent={true}
			onRequestClose={onClose}
		>
			<View className='bg-modal-bg-transparent flex-1 items-center justify-center px-[5%]'>
				<View className='bg-modal-bg relative h-[50%] w-full items-center justify-center gap-4 rounded-3xl border border-border'>
					<CardTitle className='text-modal-title'>{title}</CardTitle>
					<BackBtn
						className='absolute right-5 top-5'
						hitSlop={20}
						onPress={onClose}
					/>
					{children}
					<Button
						activeOpacity={1}
						title='Aceptar'
						className='absolute -bottom-5 w-[70%] bg-border'
						onPress={onClose}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default memo(ModalLightbulb)
