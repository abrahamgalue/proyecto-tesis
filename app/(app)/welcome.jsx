import { useRouter } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

import { Image } from '@/components/image'
import { SafeAreaView } from '@/components/safe-area-view'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { H1, Muted } from '@/components/ui/typography'

export default function WelcomeScreen() {
	const router = useRouter()

	return (
		<SafeAreaView className='flex flex-1 bg-background p-4'>
			<View className='flex flex-1 items-center justify-center gap-y-4 web:m-4'>
				<Image
					source={require('@/assets/icon.png')}
					className='w-16 h-16 rounded-xl'
				/>
				<H1 className='text-center'>Bienvenido a Expo Supabase Starter</H1>
				<Muted className='text-center'>
					Un proyecto de inicio integral para desarrollar aplicaciones React
					Native y Expo con Supabase como backend.
				</Muted>
			</View>
			<View className='flex flex-col gap-y-4 web:m-4'>
				<Button
					size='default'
					variant='default'
					onPress={() => {
						router.push('/sign-in')
					}}
				>
					<Text>Iniciar sesión</Text>
				</Button>
			</View>
		</SafeAreaView>
	)
}
