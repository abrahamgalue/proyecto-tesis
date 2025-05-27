import { render, screen } from '@testing-library/react-native'
import NotFound from '@/app/(app)/+not-found'

describe('<NotFound />', () => {
	test('should render correctly', () => {
		render(<NotFound />)

		expect(screen.getByText('404')).toBeOnTheScreen()

		expect(screen.getByText('This page could not be found.')).toBeOnTheScreen()
	})

	test('should apply correct styles and layout classes', () => {
		render(<NotFound />)

		const title = screen.getByText('404')
		const subtitle = screen.getByText('This page could not be found.')

		expect(title.props.className).toContain('text-4xl text-foreground')
		expect(subtitle.props.className).toContain('text-sm text-muted-foreground')
	})
})
