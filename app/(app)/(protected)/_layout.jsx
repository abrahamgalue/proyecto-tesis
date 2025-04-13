import { Tabs } from 'expo-router'
import React from 'react'

import { colors } from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function ProtectedLayout() {
	const { isDarkColorScheme } = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: isDarkColorScheme
						? colors.dark.background
						: colors.light.background
				},
				headerTintColor: isDarkColorScheme
					? colors.dark.foreground
					: colors.light.foreground,
				tabBarStyle: {
					backgroundColor: isDarkColorScheme
						? colors.dark.background
						: colors.light.background,
					borderColor: isDarkColorScheme
						? colors.dark.border
						: colors.light.border
				},
				tabBarActiveTintColor: isDarkColorScheme
					? colors.dark.tabBarTintIcon
					: colors.light.tabBarTintIcon
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Inicio',
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='home' color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: 'Configuración',
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='settings' color={color} />
					)
				}}
			/>
		</Tabs>
	)
}
