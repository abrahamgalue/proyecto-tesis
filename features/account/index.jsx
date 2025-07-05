import { TouchableOpacity, View } from 'react-native'
import { router, Link } from 'expo-router'
import Card from '@/components/ui/card'
import CardTitle from '@/components/ui/card/card-title'
import CloseSmall from '@/components/icons/CloseSmall'
import AccountHeader from '@/features/account/components/AccountHeader'
import Button from '@/components/ui/button'

function AccountModalScreen() {
	const isPresented = router.canGoBack()

	const handleBack = () => {
		router.back()
	}

	return (
		<View
			className='flex-1 items-center justify-center bg-modal-primary-transparent px-[5%]'
			style={{ minHeight: '100%' }}
		>
			<Card
				className='relative h-[70%] w-full items-center rounded-3xl border border-primary'
				imgClassName='bottom-0'
			>
				<CardTitle className='z-10 text-4xl text-modal-primary'>
					Usuario
				</CardTitle>
				{isPresented && (
					<Link href='../' asChild>
						<TouchableOpacity
							className='absolute -top-8 right-5 z-10'
							hitSlop={20}
						>
							<CloseSmall />
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

export default AccountModalScreen
