import 'react-native-url-polyfill/auto'

import { AppState } from 'react-native'
import { env } from '@/data/env/client'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = env.EXPO_PUBLIC_API_URL as string
const supabaseKey = env.EXPO_PUBLIC_API_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false
	}
})

AppState.addEventListener('change', (state) => {
	if (state === 'active') {
		supabase.auth.startAutoRefresh()
	} else {
		supabase.auth.stopAutoRefresh()
	}
})
