import { render, fireEvent, screen } from '@testing-library/react-native'
import {
	NotificationsSettingsBtn,
	AboutBtn,
	SignOutBtn
} from '@/features/settings/components/SettingsButtons'

jest.mock('expo-router', () => ({
	Link: ({ children }) => <>{children}</>
}))

jest.mock('@/components/ui/icon-symbol', () => ({
	IconSymbol: () => 'IconSymbol'
}))

jest.mock('@/constants/colors', () => ({
	colors: { light: { bgIconsWhite: '#fff' } }
}))

jest.mock('@/context/supabase-provider', () => ({
	useSupabase: () => ({
		signOut: mockSignOut
	})
}))

const mockSignOut = jest.fn()

describe('SettingsButtons', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	test('renders NotificationsSettingsBtn and triggers navigation', () => {
		render(<NotificationsSettingsBtn />)

		expect(screen.getByText('Notificaciones')).toBeTruthy()
	})

	test('renders AboutBtn and triggers navigation', () => {
		render(<AboutBtn />)

		expect(screen.getByText('Acerca de')).toBeTruthy()
	})

	test('renders SignOutBtn and calls signOut on press', () => {
		render(<SignOutBtn />)

		const button = screen.getByRole('button')

		fireEvent.press(button)

		expect(mockSignOut).toHaveBeenCalled()
	})
})
