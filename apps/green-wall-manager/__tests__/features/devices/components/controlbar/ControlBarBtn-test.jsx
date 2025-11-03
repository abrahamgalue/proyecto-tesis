import { render, screen, fireEvent } from '@testing-library/react-native'
import ControlBarBtn from '@/features/devices/components/controlbar/ControlBarBtn'
import { useEdit, useEditActions } from '@/store/editStore'
import { Text } from 'react-native'

jest.mock('@/store/editStore', () => ({
	useEdit: jest.fn(),
	useEditActions: jest.fn()
}))

const MockDeleteBtn = <Text>DeleteBtn</Text>

jest.mock('@/components/icons/DeleteBtn', () => ({
	__esModule: true,
	default: () => MockDeleteBtn
}))

const MockEditBtn = <Text>EditBtn</Text>

jest.mock('@/components/icons/EditBtn', () => ({
	__esModule: true,
	default: () => MockEditBtn
}))

const mockToggleEdited = jest.fn()

describe('<ControlBarBtn />', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('renders EditBtn when edit is false', () => {
		useEdit.mockReturnValue(false)
		useEditActions.mockReturnValue({ toggleEdited: jest.fn() })

		render(<ControlBarBtn />)

		expect(screen.getByText('EditBtn')).toBeOnTheScreen()
	})

	test('renders DeleteBtn when edit is true', () => {
		useEdit.mockReturnValue(true)
		useEditActions.mockReturnValue({ toggleEdited: jest.fn() })

		render(<ControlBarBtn />)

		expect(screen.getByText('DeleteBtn')).toBeOnTheScreen()
	})

	test('calls toggleEdited when pressed', () => {
		useEdit.mockReturnValue(false)

		useEditActions.mockReturnValue({ toggleEdited: mockToggleEdited })

		render(<ControlBarBtn />)

		fireEvent.press(screen.getByRole('button'))

		expect(mockToggleEdited).toHaveBeenCalled()
	})
})
