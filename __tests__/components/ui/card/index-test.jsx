import { render, screen } from '@testing-library/react-native'
import Card from '@/components/ui/card'
import { Text } from '@/components/ui/text'

const MockCardImgBackground = ({ imgClassName }) => (
	<Text>Mocked CardImgBackground {imgClassName}</Text>
)

jest.mock('@/components/ui/card/card-img-background', () => ({
	__esModule: true,
	default: ({ imgClassName }) => (
		<MockCardImgBackground imgClassName={imgClassName} />
	)
}))

describe('<Card />', () => {
	test('renders children inside Card', () => {
		render(
			<Card>
				<Text>Card Content</Text>
			</Card>
		)

		expect(screen.getByText('Card Content')).toBeOnTheScreen()
	})

	test('renders CardImgBackground', () => {
		render(
			<Card imgClassName='img-class'>
				<Text>Card Content</Text>
			</Card>
		)

		expect(screen.getByText(/Mocked CardImgBackground/)).toBeOnTheScreen()
	})

	test('applies className to GradientBackground', () => {
		render(
			<Card className='custom-class'>
				<Text>Class Content</Text>
			</Card>
		)

		expect(screen.getByText('Class Content')).toBeOnTheScreen()
		expect(screen.root.props.className).toContain('custom-class')
	})

	test('passes imgClassName to CardImgBackground', () => {
		render(
			<Card imgClassName='img-class'>
				<Text>ImgClass Content</Text>
			</Card>
		)

		expect(screen.getByText('ImgClass Content')).toBeOnTheScreen()
		expect(
			screen.getByText('Mocked CardImgBackground img-class')
		).toBeOnTheScreen()
	})
})
