import { render, screen } from '@testing-library/react-native'
import { IconSymbol } from '@/components/ui/icon-symbol'

jest.mock('@expo/vector-icons/MaterialIcons', () => {
	return jest
		.fn()
		.mockImplementation(({ color, size, name, style, className }) => {
			return (
				<materialIcons
					color={color}
					size={size}
					name={name}
					style={style}
					className={className}
				/>
			)
		})
})

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => {
	return jest
		.fn()
		.mockImplementation(({ color, size, name, style, className }) => {
			return (
				<materialCommunityIcons
					color={color}
					size={size}
					name={name}
					style={style}
					className={className}
				/>
			)
		})
})

describe('<IconSymbol />', () => {
	test('should render a MaterialIcons icon and a size of 24 by default', () => {
		render(<IconSymbol name='check' />)

		const icon = screen.root

		expect(icon).toBeOnTheScreen()
		expect(icon.type).toMatch(/materialIcons/i)
		expect(icon.props).toHaveProperty('size', 24)
	})

	test('should render a MaterialCommunityIcons icon when family is set', () => {
		render(<IconSymbol family='MaterialCommunityIcons' name='home' />)

		const icon = screen.root

		expect(icon).toBeOnTheScreen()
		expect(icon.type).toMatch(/materialCommunityIcons/i)
	})

	test('should render correctly with props', () => {
		render(
			<IconSymbol
				className='icon-class'
				color='rebeccapurple'
				family='MaterialCommunityIcons'
				name='home'
				size={30}
				style={{ margin: 5, padding: 10 }}
			/>
		)

		const icon = screen.root

		expect(icon).toBeOnTheScreen()
		expect(icon.type).toMatch(/materialCommunityIcons/i)
		expect(icon.props).toHaveProperty('className', 'icon-class')
		expect(icon.props).toHaveProperty('color', 'rebeccapurple')
		expect(icon.props).toHaveProperty('size', 30)
		expect(icon).toHaveStyle({ margin: 5, padding: 10 })
	})
})
