export const gradientLocations = [0, 0.28, 0.69, 1]
export const gradientStart = { x: 0, y: 0 }
export const gradientEnd = { x: 1, y: 0 }

export const colors = {
	light: {
		activityIndicator: '#00171e',
		bgBrandPrimary: '#FFFFFF',
		bgBrandPrimarySkeleton: '#d9d9d9',
		bgBtnPrimary: '#0C6971',
		bgBtnQuaternary: '#6DA5C0',
		bgBtnSecondary: '#6DA5C0',
		bgBtnTertiary: 'rgba(109,165,192,0.3)',
		bgDevicePrimary: 'rgba(255,255,255,0.2)',
		bgIconsPrimary: '#2c2c2c',
		bgIconsWhite: '#fff',
		bgLinePrimary: '#070708',
		bgModalHeaderPrimary: '#04151a',
		bgModalPrimary: '#0c2229',
		bgModalPrimaryTransparent: '#0c2229c7',
		borderPrimary: '#6DA5C0',
		gradientControlEnd: 'rgba(109,165,192,0.1)',
		gradientControlMid1: 'rgba(63,96,112,0.1)',
		gradientControlMid2: 'rgba(80,121,141,0.1)',
		gradientControlStart: 'rgba(51,77,90,0.1)',
		gradientFrom: '#fff',
		gradientTo: '#fff',
		gradientWeatherEnd: 'rgba(109,165,192,0.3)',
		gradientWeatherMid1: 'rgba(63,96,112,0.3)',
		gradientWeatherMid2: 'rgba(80,121,141,0.3)',
		gradientWeatherStart: 'rgba(51,77,90,0.3)',
		notificationPrimaryActive: '#368e96',
		notificationSecondary: '#008a08',
		notificationTertiary: '#50798d',
		primary: '#18181b',
		primaryForeground: '#FAFAFA',
		textForegroundEmphasis: '#0C6971',
		textForegroundPrimary: '#070708',
		textForegroundSecondary: '#929BA3',
		textForegroundTertiary: '#6da5c0',
		textModalPrimary: '#fff',
		textModalSecondary: '#929BA3'
	},
	dark: {
		activityIndicator: '#00171e',
		bgBrandPrimary: '#082D33',
		bgBrandPrimarySkeleton: '#082D33',
		bgBtnPrimary: '#0C6971',
		bgBtnQuaternary: '#6DA5C0',
		bgBtnSecondary: '#6DA5C0',
		bgBtnTertiary: 'rgba(109,165,192,0.3)',
		bgDevicePrimary: 'rgb(8 45 51 / 0.8)',
		bgIconsPrimary: '#a1a1aa',
		bgIconsWhite: '#fff',
		bgLinePrimary: '#fafafa',
		bgModalHeaderPrimary: '#04151a',
		bgModalPrimary: '#0c2229',
		bgModalPrimaryTransparent: '#0c2229c7',
		borderPrimary: '#6DA5C0',
		gradientControlEnd: 'rgba(109,165,192,0.1)',
		gradientControlMid1: 'rgba(63,96,112,0.1)',
		gradientControlMid2: 'rgba(80,121,141,0.1)',
		gradientControlStart: 'rgba(51,77,90,0.1)',
		gradientFrom: '#082D33',
		gradientTo: '#04151A',
		gradientWeatherEnd: 'rgba(109,165,192,0.3)',
		gradientWeatherMid1: 'rgba(63,96,112,0.3)',
		gradientWeatherMid2: 'rgba(80,121,141,0.3)',
		gradientWeatherStart: 'rgba(51,77,90,0.3)',
		notificationPrimaryActive: '#236c72',
		notificationSecondary: '#008a08',
		notificationTertiary: '#50798d',
		primary: '#FAFAFA',
		primaryForeground: '#18181b',
		textForegroundEmphasis: '#0C6971',
		textForegroundPrimary: '#fafafa',
		textForegroundSecondary: '#929BA3',
		textForegroundTertiary: '#6da5c0',
		textModalPrimary: '#fafafa',
		textModalSecondary: '#929BA3'
	}
}

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
