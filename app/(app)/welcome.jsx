import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

import { Image } from '@/components/image'
import { SafeAreaView } from '@/components/safe-area-view'

export default function WelcomeScreen() {
	const router = useRouter()

	return (
		<SafeAreaView className='flex flex-1 bg-background p-4'>
			<View className='flex flex-1 items-center justify-center gap-y-4 web:m-4'>
				<Image
					source={require('@/assets/icon.png')}
					className='w-16 h-16 rounded-xl'
				/>
				<Text className='text-center web:scroll-m-20 text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl web:select-text'>
					Bienvenido a Expo Supabase Starter
				</Text>
				<Text className='text-center text-sm text-muted-foreground web:select-text'>
					Un proyecto de inicio integral para desarrollar aplicaciones React
					Native y Expo con Supabase como backend.
				</Text>
			</View>
			<View className='flex flex-col gap-y-4 web:m-4'>
				<Pressable
					className='bg-blue-600'
					onPress={() => {
						router.push('/sign-in')
					}}
				>
					<Text>Iniciar sesión</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}
