import { TouchableOpacity, View } from 'react-native'
import { router, Link } from 'expo-router'
import Card from '@/components/ui/Card'
import CardTitle from '@/components/ui/CardTitle'
import { CloseSmallIcon } from '@/components/ui/Icons/Icons'
import AccountHeader from '@/components/ui/AccountHeader'
import Button from '@/components/Button'

export default function AccountModal() {
	const isPresented = router.canGoBack()

	const handleBack = () => {
		router.back()
	}

	return (
		<View
			className='bg-modal-primary-transparent flex-1 items-center justify-center px-[5%]'
			style={{ minHeight: '100%' }}
		>
			<Card
				className='relative h-[70%] w-full items-center rounded-3xl border border-primary'
				imgClassName='bottom-0'
			>
				<CardTitle className='text-modal-primary z-10 text-4xl'>
					Usuario
				</CardTitle>
				{isPresented && (
					<Link href='../' asChild>
						<TouchableOpacity
							className='absolute -top-8 right-5 z-10'
							hitSlop={20}
						>
							<CloseSmallIcon />
						</TouchableOpacity>
					</Link>
				)}
				<AccountHeader />

				<View className='mb-10 flex w-[80%] flex-1 items-center justify-end'>
					<Button
						title='Aceptar'
						className='rounded-2xl'
						textClassName='text-modal-primary'
						onPress={handleBack}
					/>
				</View>
			</Card>
		</View>
	)
}
