import { render, screen } from '@testing-library/react-native'
import NotFound from '@/app/+not-found'

describe('<NotFound />', () => {
	test('should render correctly', () => {
		render(<NotFound />)

		expect(screen.getByText('404')).toBeOnTheScreen()

		expect(screen.getByText('This page could not be found.')).toBeOnTheScreen()
	})
})
