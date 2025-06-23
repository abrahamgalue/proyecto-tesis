import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, SplashScreen } from 'expo-router'

import { supabase } from '@/config/supabase'

SplashScreen.preventAutoHideAsync()

export const SupabaseContext = createContext({
	initialized: false,
	session: null,
	signIn: async () => {},
	signOut: async () => {}
})

export const useSupabase = () => useContext(SupabaseContext)

export const SupabaseProvider = ({ children }) => {
	const [initialized, setInitialized] = useState(false)
	const [session, setSession] = useState(null)
	const router = useRouter()

	const signIn = async (email, password) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})

		if (error) {
			throw error
		}

		if (data.session) {
			setSession(data.session)
			console.log('Usuario ha iniciado sesión:', data.user)
		} else {
			console.log('No se devolvió usuario después del registro')
		}
	}

	const signOut = async () => {
		const { error } = await supabase.auth.signOut()

		if (error) {
			throw error
		} else {
			console.log('Usuario ha cerrado sesión')
		}
	}

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
		setInitialized(true)
	}, [])

	useEffect(() => {
		if (initialized) {
			if (session) {
				router.replace('/')
			} else {
				router.replace('/sign-in')
			}
		}
		setTimeout(() => {
			SplashScreen.hideAsync()
		}, 500)
	}, [initialized, session])

	return (
		<SupabaseContext.Provider
			value={{
				initialized,
				session,
				signIn,
				signOut
			}}
		>
			{children}
		</SupabaseContext.Provider>
	)
}
