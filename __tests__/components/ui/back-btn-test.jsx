import { render, screen, userEvent } from '@testing-library/react-native'
import BackBtn from '@/components/ui/back-btn'
import { Text } from 'react-native'

const CloseSmallMock = () => <Text>CloseSmall</Text>
CloseSmallMock.displayName = 'CloseSmall'

const CloseMock = () => <Text>Close</Text>
CloseMock.displayName = 'Close'

jest.mock('@/components/icons/CloseSmall', () => ({
	__esModule: true,
	default: CloseSmallMock
}))

jest.mock('@/components/icons/Close', () => ({
	__esModule: true,
	default: CloseMock
}))

const mockHandlePress = jest.fn()

const defaultProps = {
	onPress: mockHandlePress,
	hitSlop: { top: 10, bottom: 10, left: 10, right: 10 }
}

describe('BackBtn />', () => {
	/**
	 * TO-DO
	 *
	 * Warning: An update to Animated(View) inside a test was not wrapped in act(...).
	 */
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {})
	})

	afterAll(() => {
		jest.restoreAllMocks()
	})

	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('renders CloseSmall when small=true (default)', () => {
		render(<BackBtn {...defaultProps} />)

		expect(screen.getByText('CloseSmall')).toBeOnTheScreen()
	})

	test('renders Close when small=false', () => {
		render(<BackBtn {...defaultProps} small={false} />)

		expect(screen.getByText('Close')).toBeTruthy()
	})

	test('calls onPress when button is pressed', async () => {
		render(<BackBtn {...defaultProps} />)
		const button = screen.root

		const user = userEvent.setup()

		await user.press(button)

		expect(mockHandlePress).toHaveBeenCalled()
	})

	test('passes hitSlop prop correctly', () => {
		render(<BackBtn {...defaultProps} />)
		const button = screen.root

		expect(button.props.hitSlop).toEqual(defaultProps.hitSlop)
	})
})
