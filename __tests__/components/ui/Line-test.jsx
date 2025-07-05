import { render, screen } from '@testing-library/react-native'
import Line from '@/components/ui/line'
import { LINE_ERR_MSG } from '@/lib/utils'

describe('<Line />', () => {
	let consoleErrorSpy

	beforeEach(() => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

		jest.clearAllMocks()
	})

	afterEach(() => {
		jest.restoreAllMocks()
	})

	test('should render a line', () => {
		render(<Line width={70} height={1} />)

		expect(screen.root).toBeOnTheScreen()
	})

	test('should render with custom styles', () => {
		render(<Line />)

		expect(screen.root).toHaveStyle({ height: 1, width: 1 })
	})

	test('should render line with percentage values', () => {
		render(<Line height='60%' />)

		expect(screen.root).toBeOnTheScreen()
	})

	test('throws an error if both width and height are greater than 1', () => {
		expect(() => render(<Line width={10} height={5} />)).toThrow(LINE_ERR_MSG)

		expect(consoleErrorSpy).toHaveBeenCalled()
	})

	test('throws an error if both width and height are percentages', () => {
		expect(() => render(<Line width='50%' height='75%' />)).toThrow(
			LINE_ERR_MSG
		)

		expect(consoleErrorSpy).toHaveBeenCalled()
	})

	test('does not throw an error if width is greater than 1 and height is 1', () => {
		render(<Line width={10} height={1} />)

		expect(() => screen.root).not.toThrow()
	})

	test('does not throw an error if height is greater than 1 and width is 1', () => {
		render(<Line width={1} height={5} />)

		expect(() => screen.root).not.toThrow()
	})

	test('does not throw an error if width is a percentage and height is 1', () => {
		render(<Line width='50%' height={1} />)

		expect(() => screen.root).not.toThrow()
	})

	test('does not throw an error if height is a percentage and width is 1', () => {
		render(<Line width={1} height='75%' />)

		expect(() => screen.root).not.toThrow()
	})
})
