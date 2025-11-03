import * as SystemUI from 'expo-system-ui'
import * as NavigationBar from 'expo-navigation-bar'

export function changeBackgroundColor(color: string) {
	SystemUI.setBackgroundColorAsync(color)
	NavigationBar.setBackgroundColorAsync(color)
}
