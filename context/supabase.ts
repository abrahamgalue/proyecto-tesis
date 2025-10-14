import { Session } from '@supabase/supabase-js'
import { createContext } from 'react'

interface SupabaseContextValue {
	initialized: boolean
	session: Session | null
	signIn: (email: string, password: string) => Promise<void>
	signOut: () => Promise<void>
}

export const SupabaseContext = createContext<SupabaseContextValue>({
	initialized: false,
	session: null,
	signIn: async (email: string, password: string) => {},
	signOut: async () => {}
})
