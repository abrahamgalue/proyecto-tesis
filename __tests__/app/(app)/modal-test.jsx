import { render, screen } from '@testing-library/react-native'
import Modal from '@/app/(app)/modal'

describe('<Modal />', () => {
	test('should render the title and description', () => {
		render(<Modal />)

		expect(screen.getByText('Modal')).toBeOnTheScreen()
		expect(screen.getByText('Esta es una pantalla modal.')).toBeOnTheScreen()
	})
})
