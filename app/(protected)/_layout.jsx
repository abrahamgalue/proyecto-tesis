import { useSupabase } from '@/context/supabase-provider'
import { Redirect, Stack } from 'expo-router'
import { View } from 'react-native'

export default function ProtectedLayout() {
	const { initialized, session } = useSupabase()

	if (!initialized) {
		return null
	}

	if (!session) {
		return <Redirect href='/welcome' />
	}

	return (
		<View className='flex-1 bg-background'>
			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='index' />
				<Stack.Screen name='settings' />
				<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
			</Stack>
		</View>
	)
}
