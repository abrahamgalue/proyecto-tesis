import { TouchableOpacity, View } from 'react-native'
import { router, Link } from 'expo-router'
import Card from '@/components/ui/card'
import CardTitle from '@/components/ui/card/card-title'
import CloseSmall from '@/components/icons/CloseSmall'
import SettingsHeader from '@/features/settings/components/SettingsHeader'
import {
	NotificationsSettingsBtn,
	AboutBtn,
	SignOutBtn
} from '@/features/settings/components/SettingsButtons'

export default function SettingsScreen() {
	const isPresented = router.canGoBack()

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
					CONFIGURACIÓN
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
				<SettingsHeader />

				<NotificationsSettingsBtn />

				<AboutBtn />

				<SignOutBtn />
			</Card>
		</View>
	)
}
