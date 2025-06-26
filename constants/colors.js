import { colors } from './generatedColors'

export const gradientLocations = [0, 0.28, 0.69, 1]
export const gradientStart = { x: 0, y: 0 }
export const gradientEnd = { x: 1, y: 0 }

export const gradientBgColors = {
	card: {
		dark: [
			colors.dark.gradientWeatherStart,
			colors.dark.gradientWeatherMid1,
			colors.dark.gradientWeatherMid2,
			colors.dark.gradientWeatherEnd
		],
		light: [
			colors.light.gradientWeatherStart,
			colors.light.gradientWeatherMid1,
			colors.light.gradientWeatherMid2,
			colors.light.gradientWeatherEnd
		]
	},
	screen: {
		dark: [colors.dark.gradientFrom, colors.dark.gradientTo],
		light: [colors.light.gradientFrom, colors.light.gradientTo]
	},
	control: {
		dark: [
			colors.dark.gradientControlStart,
			colors.dark.gradientControlMid1,
			colors.dark.gradientControlMid2,
			colors.dark.gradientControlEnd
		],
		light: [
			colors.light.gradientControlStart,
			colors.light.gradientControlMid1,
			colors.light.gradientControlMid2,
			colors.light.gradientControlEnd
		]
	}
}

export { colors }
