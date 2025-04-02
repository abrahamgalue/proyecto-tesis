import { Tabs } from 'expo-router'
import React from 'react'

import { colors } from '@/constants/colors'
import { useColorScheme } from '@/lib/useColorScheme'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function ProtectedLayout() {
	const { colorScheme } = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor:
						colorScheme === 'dark'
							? colors.dark.background
							: colors.light.background
				},
				headerTintColor:
					colorScheme === 'dark'
						? colors.dark.foreground
						: colors.light.foreground,
				tabBarStyle: {
					backgroundColor:
						colorScheme === 'dark'
							? colors.dark.background
							: colors.light.background
				},
				tabBarActiveTintColor:
					colorScheme === 'dark'
						? colors.dark.tabBarTintIcon
						: colors.light.tabBarTintIcon
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Inicio',
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='house.fill' color={color} />
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
