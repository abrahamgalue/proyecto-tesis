import { Stack } from 'expo-router'

import { colors } from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'

export const unstable_settings = {
	initialRouteName: '(root)',
}

export default function AppLayout() {
	const { colorScheme } = useColorScheme()

	return (
		<Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
			<Stack.Screen name='(protected)' />
			<Stack.Screen name='welcome' />
			<Stack.Screen
				name='sign-in'
				options={{
					presentation: 'modal',
					headerShown: true,
					headerTitle: 'Iniciar sesión',
					headerStyle: {
						backgroundColor:
							colorScheme === 'dark'
								? colors.dark.background
								: colors.light.background,
					},
					headerTintColor:
						colorScheme === 'dark'
							? colors.dark.foreground
							: colors.light.foreground,
					gestureEnabled: true,
				}}
			/>
			<Stack.Screen
				name='modal'
				options={{
					presentation: 'modal',
					headerShown: true,
					headerTitle: 'Modal',
					headerStyle: {
						backgroundColor:
							colorScheme === 'dark'
								? colors.dark.background
								: colors.light.background,
					},
					headerTintColor:
						colorScheme === 'dark'
							? colors.dark.foreground
							: colors.light.foreground,
					gestureEnabled: true,
				}}
			/>
		</Stack>
	)
}
