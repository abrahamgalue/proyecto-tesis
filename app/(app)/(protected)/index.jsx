import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function Home() {
	return (
		<View className='flex-1 items-center justify-center bg-background p-4 gap-y-4'>
			<Text className='text-center text-foreground text-4xl'>Inicio</Text>
			<Text className='text-center text-sm text-muted-foreground web:select-text'>
				Ahora estás autenticado y esta sesión persistirá incluso después de
				cerrar la aplicación.
			</Text>
			<Pressable
				className='w-full bg-blue-600'
				onPress={() => router.push('/(app)/modal')}
			>
				<Text>Abrir Modal</Text>
			</Pressable>
		</View>
	)
}
