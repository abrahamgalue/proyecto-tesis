import { render, fireEvent, screen } from '@testing-library/react-native'
import ScreenWithBackButton from '@/components/ScreenWithBackButton'
import { Text } from '@/components/ui/text'

const mockUseColorScheme = jest.fn()

jest.mock('@/hooks/useColorScheme', () => ({
	useColorScheme: () => mockUseColorScheme()
}))

const mockBackBtn = <Text>BackBtn</Text>

jest.mock('@/components/ui/back-btn', () => ({
	__esModule: true,
	default: () => mockBackBtn
}))

jest.mock('@/lib/utils', () => ({
	cn: (...args) => args.filter(Boolean).join(' ')
}))

const mockOnBack = jest.fn()

describe('<ScreenWithBackButton />', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	test('renders title, children and uses default className', () => {
		mockUseColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<ScreenWithBackButton title='Settings' onHandleBack={jest.fn()}>
				<Text>Content</Text>
			</ScreenWithBackButton>
		)

		expect(screen.getByText('Settings')).toBeOnTheScreen()
		expect(screen.getByText('Content')).toBeOnTheScreen()
		expect(screen.getByText('BackBtn')).toBeOnTheScreen()
	})

	test('calls onHandleBack when back button is pressed', () => {
		mockUseColorScheme.mockReturnValue({ isDarkColorScheme: true })

		render(
			<ScreenWithBackButton title='Go Back' onHandleBack={mockOnBack}>
				<Text>Child</Text>
			</ScreenWithBackButton>
		)

		fireEvent.press(screen.getByText('BackBtn'))

		expect(mockOnBack).toHaveBeenCalled()
	})

	test('applies custom containerClassName correctly', () => {
		mockUseColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<ScreenWithBackButton
				title='Styled'
				onHandleBack={jest.fn()}
				containerClassName='bg-red'
			>
				<Text>Red Style</Text>
			</ScreenWithBackButton>
		)

		expect(screen.getByText('Styled')).toBeOnTheScreen()
		expect(screen.getByText('Red Style')).toBeOnTheScreen()
	})
})
