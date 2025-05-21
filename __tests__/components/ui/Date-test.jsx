import { render, screen } from '@testing-library/react-native'
import Day from '@/components/ui/Date'

jest.mock('@/lib/utils', () => ({
	formatDate: jest.fn(() => 'Martes | 20 May')
}))

describe('<Date />', () => {
	test('should render date', () => {
		render(<Day />)

		const date = screen.getByRole('text', { name: 'Martes | 20 May' })

		expect(date).toBeOnTheScreen()
		expect(date).toHaveStyle({ fontFamily: 'Inter' })
	})
})
