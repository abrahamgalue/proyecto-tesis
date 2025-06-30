import { render, screen } from '@testing-library/react-native'
import { Image, ImageBackground } from '@/components/image'
import { Text } from '@/components/ui/text'

describe('<Image />', () => {
	test('should render Image', () => {
		render(
			<Image source={require('@/assets/images/logo-raw.png')} alt='Image' />
		)

		expect(screen.root).toBeOnTheScreen()
		expect(screen.root.props).toHaveProperty('accessibilityLabel', 'Image')
	})
})

describe('<ImageBackground />', () => {
	test('should render ImageBackground with children', () => {
		render(
			<ImageBackground source={require('@/assets/images/logo.png')}>
				<Text>Hola Mundo</Text>
			</ImageBackground>
		)

		expect(screen.root).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: 'Hola Mundo' })).toBeOnTheScreen()
	})
})
