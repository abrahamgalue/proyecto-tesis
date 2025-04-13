import { useSupabase } from '@/context/supabase-provider'
import { View, Text, Pressable } from 'react-native'

export default function Settings() {
	const { signOut } = useSupabase()

	return (
		<View className='flex-1 items-center justify-center bg-background p-4 gap-y-4'>
			<Text className='text-center text-foreground text-4xl'>Desconectar</Text>
			<Text className='text-center text-sm text-muted-foreground web:select-text'>
				Cerrar sesión y volver a la pantalla de bienvenida.
			</Text>
			<Pressable
				className='w-full bg-blue-600 p-4 rounded-full'
				onPress={signOut}
			>
				<Text className='text-center'>Desconectar</Text>
			</Pressable>
		</View>
	)
}
