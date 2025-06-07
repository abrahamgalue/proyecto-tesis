import { useSupabase } from '@/context/supabase-provider'
import { View, Pressable } from 'react-native'
import { Text } from '@/components/text'

export default function Settings() {
	const { signOut } = useSupabase()

	return (
		<View className='flex-1 items-center justify-center gap-y-4 bg-background p-4'>
			<Text className='text-center text-4xl text-foreground'>Settings</Text>
			<Text className='text-center text-sm text-muted-foreground web:select-text'>
				Cerrar sesión y volver a la pantalla de bienvenida.
			</Text>
			<Pressable
				accessibilityRole='button'
				className='w-full rounded-full bg-blue-600 p-4'
				onPress={signOut}
			>
				<Text className='text-center'>Desconectar</Text>
			</Pressable>
		</View>
	)
}
