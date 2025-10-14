import { Session } from '@supabase/supabase-js'
import { SupabaseContext } from '@/context/supabase'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { useUserActions } from '@/store/accountStore'
import { useRouter, SplashScreen } from 'expo-router'
import { supabase } from '@/config/supabase'

SplashScreen.preventAutoHideAsync()

export const useSupabase = () => useContext(SupabaseContext)

interface SupabaseProviderProps {
	children: ReactNode
}

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
	const [initialized, setInitialized] = useState(false)
	const [session, setSession] = useState<Session | null>(null)
	const router = useRouter()
	const { resetAccount } = useUserActions()

	const signIn = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})

		if (error) {
			console.error('[ESP32] Error al iniciar sesión en el ESP32.')
			throw new Error('No se pudo iniciar sesión')
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
			console.error('[ESP32] Error al cerrar sesión en el ESP32.')
			throw new Error('No se pudo cerrar sesión')
		} else {
			console.log('Usuario ha cerrado sesión')
			resetAccount()
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
