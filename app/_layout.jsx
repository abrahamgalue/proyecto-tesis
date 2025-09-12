import '../global.css'
import { View } from 'react-native'
import { Stack } from 'expo-router'

import { SupabaseProvider } from '@/context/supabase-provider'
import { StatusBar } from 'expo-status-bar'

import { useColorScheme } from '@/hooks/useColorScheme'
import { useEffect } from 'react'
import { changeBackgroundColor } from '@/lib/colors'
import { colors } from '@/constants/colors'

export default function AppLayout() {
	const { isDarkColorScheme } = useColorScheme()

	useEffect(() => {
		if (isDarkColorScheme) {
			changeBackgroundColor(colors.dark.bgBrandPrimary)
		} else {
			changeBackgroundColor(colors.light.bgBrandPrimary)
		}
	}, [isDarkColorScheme])

	return (
		<SupabaseProvider>
			<StatusBar
				backgroundColor={
					isDarkColorScheme
						? colors.dark.bgBrandPrimary
						: colors.light.bgBrandPrimary
				}
				style='auto'
			/>
			<View className='flex-1 bg-brand-primary'>
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
									? colors.dark.bgBrandPrimary
									: colors.light.bgBrandPrimary
							},
							headerTintColor: isDarkColorScheme
								? colors.dark.textForegroundPrimary
								: colors.light.textForegroundPrimary,
							gestureEnabled: true
						}}
					/>
				</Stack>
			</View>
		</SupabaseProvider>
	)
}
