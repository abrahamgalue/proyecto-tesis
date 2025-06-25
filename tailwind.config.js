module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				'bright-title': 'var(--bright-title)',
				'modal-bg-transparent': 'var(--modal-bg-transparent)',
				'modal-bg': 'var(--modal-bg)',
				'modal-title': 'var(--modal-title)',
				border: 'var(--border)',
				btn: 'var(--btn)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: {
					DEFAULT: 'var(--background)',
					skeleton: 'var(--background-skeleton)'
				},
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				'device-bg': 'var(--device-bg)',
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				'active-clear-notifications-btn-text':
					'var(--active-clear-notifications-btn-text)',
				'active-notification-bg': 'var(--active-notification-bg)',
				'activity-indicator': 'var(--activity-indicator)',
				'base-icons': 'var(--base-icons)',
				'control-gradient1': 'var(--control-gradient1)',
				'control-gradient2': 'var(--control-gradient2)',
				'control-gradient3': 'var(--control-gradient3)',
				'control-gradient4': 'var(--control-gradient4)',
				'from-gradient': 'var(--from-gradient)',
				'header-modal-bg': 'var(--header-modal-bg)',
				'notification-num': 'var(--notification-num)',
				'notification-view-bg': 'var(--notification-view-bg)',
				'tab-bar-tint-icon': 'var(--tab-bar-tint-icon)',
				'to-gradient': 'var(--to-gradient)',
				'weather-gradient1': 'var(--weather-gradient1)',
				'weather-gradient2': 'var(--weather-gradient2)',
				'weather-gradient3': 'var(--weather-gradient3)',
				'weather-gradient4': 'var(--weather-gradient4)'
			}
		}
	},
	plugins: []
}
