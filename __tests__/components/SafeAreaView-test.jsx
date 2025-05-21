import { render, screen } from '@testing-library/react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import { Text } from '@/components/text'

describe('<SafeAreaView />', () => {
	test('should render children correctly', () => {
		render(
			<SafeAreaView>
				<Text>Hola Mundo</Text>
			</SafeAreaView>
		)

		expect(screen.getByRole('text', { name: 'Hola Mundo' })).toBeOnTheScreen()
	})

	test('should render without crashing with a className', () => {
		render(<SafeAreaView className='bg-blue-600' />)

		expect(screen.root).toBeOnTheScreen()
	})
})
