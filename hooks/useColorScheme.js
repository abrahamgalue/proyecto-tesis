import { useColorScheme as useNativewindColorScheme } from 'nativewind'

export function useColorScheme() {
	const { colorScheme, setColorScheme, toggleColorScheme } =
		useNativewindColorScheme()
	const finalColorScheme = colorScheme ?? 'dark'

	return {
		colorScheme: finalColorScheme,
		isDarkColorScheme: finalColorScheme === 'dark',
		setColorScheme,
		toggleColorScheme
	}
}
