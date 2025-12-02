import { render, userEvent, screen } from '@testing-library/react-native'
import ScreenWithBackButton from '@/components/ScreenWithBackButton'
import { Text } from '@/components/ui/text'

const mockUseColorScheme = jest.fn()

jest.mock('@/hooks/useColorScheme', () => ({
	useColorScheme: () => mockUseColorScheme()
}))

jest.mock('@/lib/utils', () => ({
	cn: (...args) => args.filter(Boolean).join(' ')
}))

const mockOnBack = jest.fn()

jest.useFakeTimers()

describe('<ScreenWithBackButton />', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	test('renders title, children, back button and uses default className', () => {
		mockUseColorScheme.mockReturnValue({ isDarkColorScheme: false })

		render(
			<ScreenWithBackButton title='Settings' onHandleBack={jest.fn()}>
				<Text>Content</Text>
			</ScreenWithBackButton>
		)

		expect(screen.getByText('Settings')).toBeOnTheScreen()
		expect(screen.getByText('Content')).toBeOnTheScreen()
		expect(screen.getByLabelText('Go Back')).toBeOnTheScreen()
	})

	test('calls onHandleBack when back button is pressed', async () => {
		mockUseColorScheme.mockReturnValue({ isDarkColorScheme: true })

		const user = userEvent.setup()

		render(
			<ScreenWithBackButton title='Go Back' onHandleBack={mockOnBack}>
				<Text>Child</Text>
			</ScreenWithBackButton>
		)

		await user.press(screen.getByLabelText('Go Back'))

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
