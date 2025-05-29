import '../global.css'
import { Stack } from 'expo-router'

import { SupabaseProvider } from '@/context/supabase-provider'
import { StatusBar } from 'expo-status-bar'

import { useColorScheme } from '@/lib/useColorScheme'
import { useEffect } from 'react'
import { changeBackgroundColor } from '@/lib/colors'
import { colors } from '@/constants/colors'

export default function AppLayout() {
	const { isDarkColorScheme } = useColorScheme()

	useEffect(() => {
		if (isDarkColorScheme) {
			changeBackgroundColor(colors.dark.background)
		} else {
			changeBackgroundColor(colors.light.background)
		}
	}, [isDarkColorScheme])

	return (
		<SupabaseProvider>
			<StatusBar
				backgroundColor={
					isDarkColorScheme ? colors.dark.background : colors.light.background
				}
				style='auto'
			/>
			<Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
				<Stack.Screen name='(protected)' />
				<Stack.Screen
					name='sign-in'
					options={{
						presentation: 'modal',
						headerShown: false,
						headerTitle: 'Iniciar sesión',
						headerStyle: {
							backgroundColor: isDarkColorScheme
								? colors.dark.background
								: colors.light.background
						},
						headerTintColor: isDarkColorScheme
							? colors.dark.foreground
							: colors.light.foreground,
						gestureEnabled: true
					}}
				/>
			</Stack>
		</SupabaseProvider>
	)
}
