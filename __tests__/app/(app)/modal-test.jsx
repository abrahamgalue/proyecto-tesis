import { render, screen } from '@testing-library/react-native'
import Modal from '@/app/(app)/modal'

describe('<Modal />', () => {
	test('should render the title and description', () => {
		render(<Modal />)

		expect(screen.getByText('Modal')).toBeOnTheScreen()
		expect(screen.getByText('Esta es una pantalla modal.')).toBeOnTheScreen()
	})

	test('should apply correct classNames', () => {
		render(<Modal />)

		const title = screen.getByText('Modal')
		const description = screen.getByText('Esta es una pantalla modal.')

		expect(title.props.className).toContain('text-4xl')
		expect(title.props.className).toContain('text-foreground')
		expect(description.props.className).toContain('text-sm')
		expect(description.props.className).toContain('text-muted-foreground')
	})
})
