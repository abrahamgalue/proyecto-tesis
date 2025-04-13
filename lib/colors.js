import * as SystemUI from 'expo-system-ui'
import * as NavigationBar from 'expo-navigation-bar'

export function changeBackgroundColor(color) {
	SystemUI.setBackgroundColorAsync(color)
	NavigationBar.setBackgroundColorAsync(color)
}
