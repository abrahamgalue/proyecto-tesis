import { render, screen } from '@testing-library/react-native'
import DigitalClock from '@/components/ui/Date/DigitalClock'

jest.mock('@/lib/utils', () => ({
	formatHour: jest.fn(() => '04:25')
}))

describe('<DigitalClock />', () => {
	test('should render actual hour', () => {
		render(<DigitalClock />)

		expect(screen.getByRole('text', { name: '04:25' })).toBeOnTheScreen()
	})
})
