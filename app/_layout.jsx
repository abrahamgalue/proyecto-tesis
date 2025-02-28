import '../global.css'

import { Slot } from 'expo-router'

import { SupabaseProvider } from '@/context/supabase-provider'
import { StatusBar } from 'expo-status-bar'

export default function AppLayout() {
	return (
		<SupabaseProvider>
			<Slot />
			<StatusBar style='auto' />
		</SupabaseProvider>
	)
}
