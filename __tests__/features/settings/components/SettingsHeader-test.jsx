import { render, screen } from '@testing-library/react-native'
import SettingsHeader from '@/features/settings/components/SettingsHeader'
import { Text } from '@/components/ui/text'

const mockGetUsername = jest.fn()
const mockUseUsername = jest.fn()

jest.mock('@/context/supabase-provider', () => ({
	useSupabase: () => ({
		session: {
			user: {
				id: 'user-123'
			}
		}
	})
}))

jest.mock('@/store/accountStore', () => ({
	useUsername: () => mockUseUsername(),
	useUserActions: () => ({
		getUsername: mockGetUsername
	})
}))

jest.mock('@/components/ui/image', () => ({
	Image: () => 'Image'
}))

const mockGenericSkeleton = <Text>Loading...</Text>

jest.mock('@/components/ui/skeletons', () => ({
	GenericSkeleton: () => mockGenericSkeleton
}))

describe('<SettingsHeader />', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	test('shows skeleton if username is empty', () => {
		render(<SettingsHeader />)

		expect(screen.getByText('Loading...')).toBeTruthy()
		expect(screen.queryByText('Julian')).toBeNull()
	})

	test('calls getUsername when hydrated and username is empty', () => {
		mockUseUsername.mockReturnValue('')

		render(<SettingsHeader />)

		expect(mockGetUsername).toHaveBeenCalledWith('user-123')
	})

	test('shows username if username exists', () => {
		mockUseUsername.mockReturnValue('Julian')

		render(<SettingsHeader />)

		expect(screen.getByText('Julian')).toBeTruthy()
		expect(screen.queryByText('Loading...')).toBeNull()
		expect(mockGetUsername).not.toHaveBeenCalled()
	})
})
