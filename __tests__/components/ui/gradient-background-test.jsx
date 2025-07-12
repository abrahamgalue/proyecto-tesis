import { render, screen } from '@testing-library/react-native'
import GradientBackground from '@/components/ui/gradient-background'
import { Text } from '@/components/ui/text'
import { colors } from '@/constants/colors'

jest.mock('@/hooks/useColorScheme', () => ({
	useColorScheme: () => ({ colorScheme: 'light' })
}))

const cardBaseStyle = {
	borderRadius: 23,
	borderWidth: 1
}

describe('<GradientBackground />', () => {
	test('renders children correctly for screen type', () => {
		render(
			<GradientBackground type='screen'>
				<Text>Test Screen</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Test Screen')).toBeOnTheScreen()
	})

	test('renders children correctly for card type', () => {
		render(
			<GradientBackground type='card'>
				<Text>Test Card</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Test Card')).toBeOnTheScreen()
	})

	test('applies custom style and className', () => {
		const customStyle = { borderWidth: 5 }

		render(
			<GradientBackground
				type='card'
				style={customStyle}
				className='custom-class'
			>
				<Text>Styled Card</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Styled Card')).toBeOnTheScreen()
		expect(screen.root).toHaveStyle({ borderWidth: 5 })
		expect(screen.root).toHaveProp('className', 'custom-class')
	})

	test('uses default type "screen" when type prop is not provided', () => {
		render(
			<GradientBackground>
				<Text>Default Screen</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Default Screen')).toBeOnTheScreen()
		expect(screen.root).not.toHaveStyle({
			borderRadius: cardBaseStyle.borderRadius
		})
		expect(screen.root).not.toHaveStyle({
			borderWidth: cardBaseStyle.borderWidth
		})
	})

	test('uses correct gradient colors for screen type', () => {
		render(
			<GradientBackground type='screen'>
				<Text>Gradient Screen</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Gradient Screen')).toBeOnTheScreen()
		expect(screen.root).not.toHaveStyle({
			borderRadius: cardBaseStyle.borderRadius
		})
		expect(screen.root).not.toHaveStyle({
			borderWidth: cardBaseStyle.borderWidth
		})
	})

	test('uses correct gradient colors for card type', () => {
		render(
			<GradientBackground type='card'>
				<Text>Gradient Card</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Gradient Card')).toBeOnTheScreen()
		expect(screen.root).toHaveStyle({
			borderColor: colors.dark.borderPrimary
		})
		expect(screen.root).toHaveStyle({
			borderRadius: cardBaseStyle.borderRadius
		})
		expect(screen.root).toHaveStyle({
			borderWidth: cardBaseStyle.borderWidth
		})
	})

	test('passes additional props to LinearGradient', () => {
		render(
			<GradientBackground type='card' testProp='value'>
				<Text>Prop Card</Text>
			</GradientBackground>
		)

		expect(screen.getByText('Prop Card')).toBeOnTheScreen()
		expect(screen.root).toHaveProp('testProp')
	})
})
