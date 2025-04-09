import { useRouter, useSegments, SplashScreen } from 'expo-router'
import { createContext, useContext, useEffect, useState } from 'react'

import { supabase } from '@/config/supabase'

SplashScreen.preventAutoHideAsync()

export const SupabaseContext = createContext({
	user: null,
	session: null,
	initialized: false,
	signInWithPassword: async () => {},
	signOut: async () => {}
})

export const useSupabase = () => useContext(SupabaseContext)

export const SupabaseProvider = ({ children }) => {
	const router = useRouter()
	const segments = useSegments()
	const [user, setUser] = useState(null)
	const [session, setSession] = useState(null)
	const [initialized, setInitialized] = useState(false)

	const signInWithPassword = async (email, password) => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		})
		if (error) {
			throw error
		}
	}

	const signOut = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) {
			throw error
		}
	}

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
			setUser(session ? session.user : null)
			setInitialized(true)
		})

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
			setUser(session ? session.user : null)
		})
	}, [])

	useEffect(() => {
		if (!initialized) return

		const inProtectedGroup = segments[1] === '(protected)'

		if (session && !inProtectedGroup) {
			router.replace('/(app)/(protected)')
		} else if (!session) {
			router.replace('/(app)/sign-in')
		}

		/* HACK: Something must be rendered when determining the initial auth state... 
		instead of creating a loading screen, we use the SplashScreen and hide it after
		a small delay (500 ms)
		*/

		setTimeout(() => {
			SplashScreen.hideAsync()
		}, 500)
	}, [initialized, session])

	return (
		<SupabaseContext.Provider
			value={{
				user,
				session,
				initialized,
				signInWithPassword,
				signOut
			}}
		>
			{children}
		</SupabaseContext.Provider>
	)
}
