import { render, screen } from '@testing-library/react-native'
import { Text } from '@/components/text'

describe('<Text />', () => {
	test('should render text correctly', () => {
		render(<Text>Hola Mundo</Text>)

		const text = screen.getByRole('text', { name: 'Hola Mundo' })

		expect(text).toBeOnTheScreen()
		expect(text).toHaveStyle({
			fontFamily: 'Inter'
		})
	})
})
