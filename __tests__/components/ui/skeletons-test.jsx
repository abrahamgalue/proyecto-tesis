import { render, screen } from '@testing-library/react-native'
import { GenericSkeleton } from '@/components/ui/skeletons'

describe('<GenericSkeleton />', () => {
	test('should render with given width and height', () => {
		render(<GenericSkeleton width={100} height={50} />)

		const skeleton = screen.root

		expect(skeleton).toBeOnTheScreen()
		expect(skeleton).toHaveStyle({ width: 100, height: 50 })
	})

	test('should apply custom className', () => {
		render(<GenericSkeleton width={80} height={40} className='my-class' />)

		const skeleton = screen.root

		expect(skeleton).toBeOnTheScreen()
		expect(skeleton.props.className).toContain('my-class')
	})
})
