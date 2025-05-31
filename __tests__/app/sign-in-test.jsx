import {
	render,
	screen,
	waitFor,
	userEvent
} from '@testing-library/react-native'
import SignIn from '@/app/sign-in'

jest.mock('@/components/image', () => ({
	Image: 'Image',
	ImageBackground: 'ImageBackground'
}))
jest.mock('@/components/ui/IconSymbol', () => ({
	IconSymbol: () => 'IconSymbol'
}))
jest.mock('@/components/safe-area-view', () => ({
	SafeAreaView: ({ children }) => children
}))
jest.mock('expo-linear-gradient', () => ({
	LinearGradient: ({ children }) => children
}))
jest.mock('@/lib/useColorScheme', () => ({
	useColorScheme: () => ({ isDarkColorScheme: true })
}))
jest.mock('@/context/supabase-provider', () => ({
	useSupabase: () => ({
		signIn: () => mockSignInWithPassword()
	})
}))

const mockSignInWithPassword = jest.fn()

describe('<SignIn />', () => {
	test('should render correctly', () => {
		render(<SignIn />)

		expect(screen.getByPlaceholderText('Email')).toBeOnTheScreen()
		expect(screen.getByPlaceholderText('Contraseña')).toBeOnTheScreen()
		expect(
			screen.getByRole('text', { name: 'INICIAR SESIÓN' })
		).toBeOnTheScreen()
	})

	test('sign in button should be disabled when fields are empty', async () => {
		render(<SignIn />)

		const button = screen.getByRole('button')

		expect(button.props.accessibilityState.disabled).toBe(true)
	})

	test('sign in button should be enabled when fields are provided', async () => {
		render(<SignIn />)

		const user = userEvent.setup()

		const emailInput = screen.getByPlaceholderText('Email')
		const passwordInput = screen.getByPlaceholderText('Contraseña')

		await user.type(emailInput, 'test@example.com')
		await user.type(passwordInput, 'password123')

		const button = screen.getByRole('button')

		await waitFor(() => {
			expect(button.props.accessibilityState.disabled).toBe(false)
		})
	})

	test('the password should be hidden by default', async () => {
		render(<SignIn />)

		const passwordInput = screen.getByPlaceholderText('Contraseña')

		expect(passwordInput.props.secureTextEntry).toBe(true)
	})

	test('the password should be displayed when the show password btn is pressed', async () => {
		render(<SignIn />)

		const user = userEvent.setup()

		const passwordInput = screen.getByPlaceholderText('Contraseña')

		const showPassBtn = screen.getByRole('togglebutton')

		await user.press(showPassBtn)

		expect(passwordInput.props.secureTextEntry).toBe(false)
	})

	test('should sign in correctly', async () => {
		render(<SignIn />)
		mockSignInWithPassword.mockResolvedValue(undefined)

		const user = userEvent.setup()

		const emailInput = screen.getByPlaceholderText('Email')
		const passwordInput = screen.getByPlaceholderText('Contraseña')

		await user.type(emailInput, 'test@example.com')
		await user.type(passwordInput, 'password123')

		const button = screen.getByRole('button')

		await user.press(button)

		expect(button.props.accessibilityState.disabled).toBe(true)

		expect(mockSignInWithPassword).toHaveBeenCalled()
	})

	test('should show sign in error message when have invalid credentials', async () => {
		render(<SignIn />)
		mockSignInWithPassword.mockRejectedValue('Invalid credentials')

		const user = userEvent.setup()

		const emailInput = screen.getByPlaceholderText('Email')
		const passwordInput = screen.getByPlaceholderText('Contraseña')

		await user.type(emailInput, 'test@example.com')
		await user.type(passwordInput, 'password123')

		const button = screen.getByRole('button')
		await user.press(button)

		expect(mockSignInWithPassword).toHaveBeenCalled()
		expect(
			screen.getByRole('text', { name: 'Correo y/o contraseña incorrecta' })
		)
	})
})
