import { render, screen } from '@testing-library/react-native'
import Day from '@/components/date/Day'

jest.mock('@/lib/formatters', () => ({
	formatDate: jest.fn(() => 'Martes | 20 May')
}))

describe('<Day />', () => {
	test('should render date', () => {
		render(<Day />)

		const date = screen.getByRole('text', { name: 'Martes | 20 May' })

		expect(date).toBeOnTheScreen()
		expect(date).toHaveStyle({ fontFamily: 'Inter' })
	})
})
