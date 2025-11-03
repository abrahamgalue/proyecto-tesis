import { useSupabase } from '@/context/supabase-provider'
import { Redirect, Stack } from 'expo-router'
import { View } from 'react-native'

export const unstable_settings = {
	initialRouteName: 'index'
}

export default function ProtectedLayout() {
	const { initialized, session } = useSupabase()

	if (!initialized) {
		return null
	}

	if (!session) {
		return <Redirect href='/welcome' />
	}

	return (
		<View className='bg-brand-primary flex-1'>
			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='index' />
				<Stack.Screen name='control' />
				<Stack.Screen
					name='settings'
					options={{
						presentation: 'transparentModal',
						animation: 'fade',
						headerShown: false
					}}
				/>
				<Stack.Screen
					name='account'
					options={{
						presentation: 'transparentModal',
						animation: 'fade',
						headerShown: false
					}}
				/>
			</Stack>
		</View>
	)
}
