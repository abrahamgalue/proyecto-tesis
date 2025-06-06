export const gradientLocations = [0, 0.28, 0.69, 1]
export const gradientStart = { x: 0, y: 0 }
export const gradientEnd = { x: 1, y: 0 }

export const colors = {
	light: {
		accent: '#6DA5C0',
		accentForeground: '#18181b',
		activityIndicator: '#00171e',
		background: '#FFFFFF',
		backgroundSkeleton: '#d9d9d9',
		baseIcons: '#2c2c2c',
		border: '#6DA5C0',
		card: '#FFFFFF',
		cardForeground: '#070708',
		controlGradient1: 'rgba(51,77,90,0.1)',
		controlGradient2: 'rgba(63,96,112,0.1)',
		controlGradient3: 'rgba(80,121,141,0.1)',
		controlGradient4: 'rgba(109,165,192,0.1)',
		destructive: '#dc2828',
		destructiveForeground: '#FAFAFA',
		foreground: '#070708',
		fromGradient: '#fff',
		input: 'transparent',
		muted: '#F4F4F5',
		mutedForeground: '#71717a',
		popover: '#FFFFFF',
		popoverForeground: '#070708',
		primary: '#18181b',
		primaryForeground: '#FAFAFA',
		ring: '#18181b',
		secondary: '#F4F4F5',
		secondaryForeground: '#18181b',
		tabBarTintIcon: '#6DA5C0',
		toGradient: '#fff',
		weatherGradient1: 'rgba(51,77,90,0.3)',
		weatherGradient2: 'rgba(63,96,112,0.3)',
		weatherGradient3: 'rgba(80,121,141,0.3)',
		weatherGradient4: 'rgba(109,165,192,0.3)',
		clearNotificationsText: '#fca5a5'
	},
	dark: {
		activityIndicator: '#00171e',
		background: '#082D33',
		backgroundSkeleton: '#082D33',
		foreground: '#FAFAFA',
		tabBarTintIcon: '#6DA5C0',
		card: '#09090b',
		cardForeground: '#FAFAFA',
		popover: '#09090b',
		popoverForeground: '#FAFAFA',
		primary: '#FAFAFA',
		primaryForeground: '#18181b',
		secondary: '#27272a',
		secondaryForeground: '#FAFAFA',
		muted: '#27272a',
		mutedForeground: '#a1a1aa',
		accent: '#6DA5C0',
		accentForeground: '#FAFAFA',
		destructive: '#dc2828',
		destructiveForeground: '#FAFAFA',
		border: '#6DA5C0',
		input: 'transparent',
		ring: '#D4D4D8',
		fromGradient: '#082D33',
		toGradient: '#04151A',
		weatherGradient1: 'rgba(51,77,90,0.3)',
		weatherGradient2: 'rgba(63,96,112,0.3)',
		weatherGradient3: 'rgba(80,121,141,0.3)',
		weatherGradient4: 'rgba(109,165,192,0.3)',
		controlGradient1: 'rgba(51,77,90,0.1)',
		controlGradient2: 'rgba(63,96,112,0.1)',
		controlGradient3: 'rgba(80,121,141,0.1)',
		controlGradient4: 'rgba(109,165,192,0.1)',
		baseIcons: '#a1a1aa',
		clearNotificationsText: '#fca5a5'
	}
}

export const gradientBgColors = {
	card: {
		dark: [
			colors.dark.weatherGradient1,
			colors.dark.weatherGradient2,
			colors.dark.weatherGradient3,
			colors.dark.weatherGradient4
		],
		light: [
			colors.light.weatherGradient1,
			colors.light.weatherGradient2,
			colors.light.weatherGradient3,
			colors.light.weatherGradient4
		]
	},
	screen: {
		dark: [colors.dark.fromGradient, colors.dark.toGradient],
		light: [colors.light.fromGradient, colors.light.toGradient]
	},
	control: {
		dark: [
			colors.dark.controlGradient1,
			colors.dark.controlGradient2,
			colors.dark.controlGradient3,
			colors.dark.controlGradient4
		],
		light: [
			colors.light.controlGradient1,
			colors.light.controlGradient2,
			colors.light.controlGradient3,
			colors.light.controlGradient4
		]
	}
}
