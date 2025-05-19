import { render, screen } from '@testing-library/react-native'

import HomeScreen from '@/components/HomeScreen'

describe('<HomeScreen />', () => {
	test('Text renders correctly on HomeScreen', () => {
		render(<HomeScreen />)

		expect(screen.getByText('Welcome!')).toBeOnTheScreen()
	})
})
