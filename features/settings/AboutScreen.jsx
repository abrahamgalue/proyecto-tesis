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
				<Text className='mb-3 text-sm text-foreground-emphasis'>
					v1.0 {currentYear}
				</Text>
				<View className='w-full rounded-3xl border border-primary py-8'>
					<Text className='mb-8 text-center text-sm text-foreground-primary'>
						Desarrollado por:
					</Text>
					<View className='gap-1'>
						<Text className='text-center text-sm text-foreground-primary'>
							Francesco Di Bella - Diseño UI
						</Text>
						<Text className='text-center text-sm text-foreground-primary'>
							Abraham Galue - Programador
						</Text>
						<Text className='text-center text-sm text-foreground-primary'>
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
			<Text className='mt-3 text-center text-sm text-foreground-emphasis'>
				Copyright ©{currentYear} PANGO Studios Ve., Ltd.
			</Text>
			<Text className='text-center text-sm text-foreground-emphasis'>
				Todos los derechos reservados.
			</Text>
		</ScreenWithBackButton>
	)
}

export default AboutScreen
