import { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { router } from 'expo-router'
import ScreenWithBackButton from '@/components/ScreenWithBackButton'
import Card from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'

function AboutScreen() {
	const currentYear = useMemo(() => new Date().getFullYear(), [])

	const handleBack = useCallback(() => {
		router.back()
	}, [])

	return (
		<ScreenWithBackButton title='Acerca de' onHandleBack={handleBack}>
			<Card
				className='h-[75%] items-center justify-center px-[5%]'
				imgClassName='bottom-0'
			>
				<Image
					className='h-64 w-64'
					source={require('@/assets/images/signin-icon.png')}
					style={{ contentFit: 'contain' }}
				/>
				<Text className='text-foreground-emphasis mb-3 text-sm'>
					v1.0 {currentYear}
				</Text>
				<View className='border-primary w-full rounded-3xl border py-8'>
					<Text className='text-foreground-primary mb-8 text-center text-sm'>
						Desarrollado por:
					</Text>
					<View className='gap-1'>
						<Text className='text-foreground-primary text-center text-sm'>
							Francesco Di Bella - Diseño UI
						</Text>
						<Text className='text-foreground-primary text-center text-sm'>
							Abraham Galue - Programador
						</Text>
						<Text className='text-foreground-primary text-center text-sm'>
							Copilot - Programador
						</Text>
					</View>
				</View>
				<Image
					className='h-32 w-32'
					source={require('@/assets/images/logo-urbe.png')}
					style={{ contentFit: 'contain' }}
				/>
			</Card>
			<Text className='text-foreground-emphasis mt-3 text-center text-sm'>
				Copyright ©{currentYear} PANGO Studios Ve., Ltd.
			</Text>
			<Text className='text-foreground-emphasis text-center text-sm'>
				Todos los derechos reservados.
			</Text>
		</ScreenWithBackButton>
	)
}

export default AboutScreen
