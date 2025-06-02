import {
	render,
	screen,
	userEvent,
	waitFor
} from '@testing-library/react-native'
import { Text } from 'react-native'
import { SupabaseProvider, useSupabase } from '@/context/supabase-provider'

jest.mock('expo-router', () => ({
	useRouter: () => ({
		replace: jest.fn()
	}),
	SplashScreen: {
		preventAutoHideAsync: jest.fn(),
		hideAsync: jest.fn()
	}
}))

jest.mock('@/config/supabase', () => ({
	supabase: {
		auth: {
			getSession: jest.fn(() => Promise.resolve({ data: { session: null } })),
			onAuthStateChange: jest.fn((callback) => {
				callback('SIGNED_OUT', null)
				return { data: { subscription: { unsubscribe: jest.fn() } } }
			}),
			signInWithPassword: jest.fn(() =>
				Promise.resolve({
					data: { session: { user: { id: '123' } }, user: { id: '123' } },
					error: null
				})
			),
			signOut: jest.fn(() => Promise.resolve({ error: null }))
		}
	}
}))

const TestConsumer = () => {
	const { initialized, session, signIn, signOut } = useSupabase()

	return (
		<>
			<Text>Initialized: {initialized ? 'yes' : 'no'}</Text>
			<Text>Session: {session ? 'yes' : 'no'}</Text>
			<Text onPress={() => signIn('test@example.com', 'password')}>SignIn</Text>
			<Text onPress={() => signOut()}>SignOut</Text>
		</>
	)
}

describe('supabase provider', () => {
	const handleLogin = (children = <TestConsumer />) => {
		return render(<SupabaseProvider>{children}</SupabaseProvider>)
	}

	beforeAll(() => {
		jest.spyOn(console, 'log').mockImplementation(() => {})
	})

	afterAll(() => {
		console.log.mockRestore()
	})

	test('should initialize the context correctly with null session', async () => {
		handleLogin()

		await waitFor(() => {
			expect(screen.getByText('Initialized: yes')).toBeOnTheScreen()
		})

		await waitFor(() => {
			expect(screen.getByText('Session: no')).toBeOnTheScreen()
		})
	})

	test('should execute signIn and update the session', async () => {
		const user = userEvent.setup()

		handleLogin()

		const signInButton = screen.getByText('SignIn')

		await user.press(signInButton)

		expect(await screen.findByText('Session: yes')).toBeOnTheScreen()
	})

	test('should execute signOut without errors', async () => {
		const user = userEvent.setup()

		handleLogin()

		const signOutButton = screen.getByText('SignOut')

		await user.press(signOutButton)

		expect(await screen.findByText('Session: no')).toBeOnTheScreen()
	})
})
