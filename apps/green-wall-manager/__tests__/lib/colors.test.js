import { changeBackgroundColor } from '@/lib/colors'

import * as SystemUI from 'expo-system-ui'
import * as NavigationBar from 'expo-navigation-bar'

jest.mock('expo-system-ui', () => ({
	setBackgroundColorAsync: jest.fn()
}))

jest.mock('expo-navigation-bar', () => ({
	setBackgroundColorAsync: jest.fn()
}))

describe('changeBackgroundColor', () => {
	test('calls both SystemUI and NavigationBar with the same color', () => {
		changeBackgroundColor('#ff0000')

		expect(SystemUI.setBackgroundColorAsync).toHaveBeenCalledWith('#ff0000')
		expect(NavigationBar.setBackgroundColorAsync).toHaveBeenCalledWith(
			'#ff0000'
		)
	})
})
