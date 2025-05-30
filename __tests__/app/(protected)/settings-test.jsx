import { render, screen, userEvent } from '@testing-library/react-native'
import Settings from '@/app/(protected)/settings'

jest.mock('@/context/supabase-provider', () => ({
	useSupabase: () => ({
		signOut: mockSignOut
	})
}))

const mockSignOut = jest.fn()

describe('<Settings />', () => {
	test('should display texts', () => {
		render(<Settings />)

		expect(
			screen.getByRole('text', {
				name: 'Settings'
			})
		).toBeOnTheScreen()

		expect(
			screen.getByRole('text', {
				name: 'Cerrar sesión y volver a la pantalla de bienvenida.'
			})
		).toBeOnTheScreen()

		expect(
			screen.getByRole('text', {
				name: 'Desconectar'
			})
		).toBeOnTheScreen()
	})

	test("should be sign out when the 'Desconectar' button is pressed.", async () => {
		render(<Settings />)

		const user = userEvent.setup()

		await user.press(screen.getByRole('button'))

		expect(mockSignOut).toHaveBeenCalled()
	})
})
