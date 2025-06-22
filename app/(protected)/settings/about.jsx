import { useMemo } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import { router } from 'expo-router'
import BackBtn from '@/components/ui/BackBtn'
import { Text } from '@/components/text'
import Card from '@/components/ui/Card'
import { Image } from '@/components/image'

export default function About() {
	const handleBack = () => {
		router.back()
	}

	const currentYear = useMemo(() => new Date().getFullYear(), [])

	return (
		<>
			<SafeAreaView className='flex-1 bg-background'>
				<View className='flex-1 items-center px-[5%]'>
					<View className='flex w-full flex-row items-start gap-3 py-8'>
						<BackBtn small={false} hitSlop={20} onPress={handleBack} />
						<Text className='font-bold text-foreground'>Acerca de</Text>
					</View>
					<Card
						className='h-[75%] items-center justify-center px-[5%]'
						imgClassName='bottom-0'
					>
						<Image
							className='h-64 w-64'
							source={require('@/assets/signin-icon.png')}
							style={{ contentFit: 'contain' }}
						/>
						<Text className='mb-3 text-sm text-[#0C6971]'>
							v1.0 {currentYear}
						</Text>
						<View className='w-full rounded-3xl border border-border py-8'>
							<Text className='mb-8 text-center text-sm text-foreground'>
								Desarrollado por:
							</Text>
							<View className='gap-1'>
								<Text className='text-center text-sm text-foreground'>
									Francesco Di Bella - Diseño UI
								</Text>
								<Text className='text-center text-sm text-foreground'>
									Abraham Galue - Programador
								</Text>
								<Text className='text-center text-sm text-foreground'>
									Copilot - Programador
								</Text>
							</View>
						</View>
						<Image
							className='h-32 w-32'
							source={require('@/assets/logo-urbe.png')}
							style={{ contentFit: 'contain' }}
						/>
					</Card>
					<Text className='mt-3 text-center text-sm text-[#0C6971]'>
						Copyright ©{currentYear} PANGO Studios Ve., Ltd.
					</Text>
					<Text className='text-center text-sm text-[#0C6971]'>
						Todos los derechos reservados.
					</Text>
				</View>
			</SafeAreaView>
		</>
	)
}
