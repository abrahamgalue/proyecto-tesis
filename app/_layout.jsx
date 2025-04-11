import '../global.css'
import { Slot } from 'expo-router'

import { SupabaseProvider } from '@/context/supabase-provider'
import { StatusBar } from 'expo-status-bar'

import { useColorScheme } from '@/lib/useColorScheme'
import { useEffect } from 'react'
import { colors, changeBackgroundColor } from '@/constants/colors'

export default function AppLayout() {
	const { colorScheme } = useColorScheme()

	useEffect(() => {
		if (colorScheme === 'dark') {
			changeBackgroundColor(colors.dark.background)
		} else {
			changeBackgroundColor(colors.light.background)
		}
	}, [colorScheme])

	return (
		<SupabaseProvider>
			<Slot />
			<StatusBar
				backgroundColor={
					colorScheme === 'dark'
						? colors.dark.background
						: colors.light.background
				}
				style='auto'
			/>
		</SupabaseProvider>
	)
}
