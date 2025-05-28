import NotificationBadge from '@/components/ui/NotificationBadge'
import { render, screen } from '@testing-library/react-native'

describe('<NotificationBadge />', () => {
	test('should render text', () => {
		render(<NotificationBadge count={2} />)

		expect(screen.getByRole('text', { name: '2' }))
	})
})
