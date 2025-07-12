import { render, screen } from '@testing-library/react-native'
import CardTitle from '@/components/ui/card/card-title'

describe('<CardTitle />', () => {
	test('renders children correctly', () => {
		render(<CardTitle>My Title</CardTitle>)
		expect(screen.getByText('My Title')).toBeOnTheScreen()
	})

	test('applies default styles', () => {
		render(<CardTitle>Styled</CardTitle>)
		const element = screen.getByText('Styled')
		expect(element.props.className).toContain('absolute')
		expect(element.props.className).toContain('text-5xl')
		expect(element.props.className).toContain('text-foreground-primary')
	})

	test('applies additional className when provided', () => {
		render(<CardTitle className='text-red-500'>Title</CardTitle>)
		const element = screen.getByText('Title')
		expect(element.props.className).toContain('text-red-500')
	})
})
