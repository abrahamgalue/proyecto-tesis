import { render, screen } from '@testing-library/react-native'
import { GenericSkeleton } from '@/components/ui/skeletons'
import { DevicesSkeletons } from '@/components/ui/skeletons'

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

	test('should render with only width', () => {
		render(<GenericSkeleton width={120} />)
		const skeleton = screen.root
		expect(skeleton).toBeOnTheScreen()
		expect(skeleton).toHaveStyle({ width: 120 })
	})

	test('should render with only height', () => {
		render(<GenericSkeleton height={60} />)
		const skeleton = screen.root
		expect(skeleton).toBeOnTheScreen()
		expect(skeleton).toHaveStyle({ height: 60 })
	})

	test('should render with no width or height', () => {
		render(<GenericSkeleton />)
		const skeleton = screen.root
		expect(skeleton).toBeOnTheScreen()
		expect(skeleton.props.style).toEqual({})
	})
})

describe('<DevicesSkeletons />', () => {
	test('should render device skeletons', () => {
		render(<DevicesSkeletons itemSize={80} />)

		const skeletons = screen.root

		expect(skeletons).toBeOnTheScreen()
	})
})
