import { TouchableOpacity, View } from 'react-native'
import { router, Link } from 'expo-router'
import Card from '@/components/ui/Card'
import CardTitle from '@/components/ui/CardTitle'
import { CloseSmallIcon } from '@/components/ui/Icons/Icons'
import SettingsHeader from '@/components/ui/SettingsHeader'
import {
	NotificationsSettingsBtn,
	AboutBtn,
	SignOutBtn
} from '@/components/ui/SettingsButtons'

export default function SettingsModal() {
	const isPresented = router.canGoBack()

	return (
		<View
			className='flex-1 items-center justify-center bg-[#0c2229c7] px-[5%]'
			style={{ minHeight: '100%' }}
		>
			<Card
				className='relative h-[70%] w-full items-center rounded-3xl border border-border bg-[#0c2229CC]'
				imgClassName='bottom-0'
			>
				<CardTitle className='z-10 text-4xl'>CONFIGURACIÓN</CardTitle>
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
				<SettingsHeader />

				<NotificationsSettingsBtn />

				<AboutBtn />

				<SignOutBtn />
			</Card>
		</View>
	)
}
