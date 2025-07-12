import { render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'
import ActionBar from '@/components/ui/action-bar'

const mockCn = jest.fn(() => 'mocked-class')
jest.mock('@/lib/utils', () => ({
	cn: (...args) => mockCn(...args)
}))

describe('<ActionBar />', () => {
	beforeEach(() => {
		mockCn.mockClear()
	})

	it('renders children correctly', () => {
		render(
			<ActionBar>
				<Text>Hello</Text>
			</ActionBar>
		)

		expect(screen.getByText('Hello')).toBeTruthy()

		expect(mockCn).toHaveBeenCalledWith(
			'mb-5 mt-5 w-[95%] flex-row items-center justify-around rounded-[30px]',
			''
		)
	})

	it('applies custom className', () => {
		render(
			<ActionBar className='custom-class'>
				<Text>World</Text>
			</ActionBar>
		)

		expect(mockCn).toHaveBeenCalledWith(
			'mb-5 mt-5 w-[95%] flex-row items-center justify-around rounded-[30px]',
			'custom-class'
		)
	})
})
