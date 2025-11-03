import { fireEvent, render, screen } from '@testing-library/react-native'
import { Text, View } from 'react-native'
import AboutScreen from '@/features/settings/AboutScreen'

const mockScreenWithBackBtn = ({ children, title, onHandleBack }) => {
	return (
		<View>
			<Text>{title}</Text>
			<Text onPress={onHandleBack}>Go Back</Text>
			{children}
		</View>
	)
}

jest.mock('@/components/ScreenWithBackButton', () => ({
	__esModule: true,
	default: ({ children, title, onHandleBack }) =>
		mockScreenWithBackBtn({ children, title, onHandleBack })
}))

jest.mock('expo-router', () => ({
	router: {
		back: () => mockBack()
	}
}))

const mockBack = jest.fn()

describe('<AboutScreen />', () => {
	afterEach(() => jest.clearAllMocks())

	test('renders all main elements and text', () => {
		render(<AboutScreen />)

		expect(screen.getByText('Acerca de')).toBeOnTheScreen()
		expect(screen.getByText('Desarrollado por:')).toBeOnTheScreen()
		expect(screen.getByText(/Francesco Di Bella/)).toBeOnTheScreen()
		expect(screen.getByText(/Abraham Galue/)).toBeOnTheScreen()
		expect(screen.getByText(/Copilot/)).toBeOnTheScreen()
		expect(screen.getByText(/PANGO Studios/)).toBeOnTheScreen()
		expect(screen.getByText(/Todos los derechos reservados/)).toBeOnTheScreen()

		const year = new Date().getFullYear()
		expect(screen.getAllByText(new RegExp(`${year}`))).toHaveLength(2)
	})

	test('calls router.back() when back button is triggered', () => {
		render(<AboutScreen />)

		const backBtn = screen.getByText('Go Back')
		fireEvent.press(backBtn)

		expect(mockBack).toHaveBeenCalled()
	})
})
