import { Modal, View } from 'react-native'
import BackBtn from './BackBtn'
import CardTitle from './CardTitle'
import Card from './Card'

function ModalSettings({ visible, onClose, title = 'Modal', children }) {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={visible}
			statusBarTranslucent={true}
			onRequestClose={onClose}
		>
			<View className='flex-1 items-center justify-center bg-[#0c2229c7] px-[5%]'>
				<Card
					className='relative h-[70%] w-full items-center rounded-3xl border border-border bg-[#0c2229CC]'
					imgClassName='bottom-0'
				>
					<CardTitle className='z-10 text-4xl'>{title}</CardTitle>
					<BackBtn
						className='absolute -top-8 right-5 z-10'
						hitSlop={20}
						onPress={onClose}
					/>
					{children}
				</Card>
			</View>
		</Modal>
	)
}

export default ModalSettings
