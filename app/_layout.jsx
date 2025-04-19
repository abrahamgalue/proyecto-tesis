import '../global.css'
import { Slot } from 'expo-router'

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
			<Slot />
			<StatusBar
				// backgroundColor={
				// 	isDarkColorScheme ? colors.dark.background : colors.light.background
				// }
				style='auto'
			/>
		</SupabaseProvider>
	)
}
