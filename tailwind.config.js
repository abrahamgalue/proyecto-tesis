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
			backgroundColor: {
				'brand-primary': {
					DEFAULT: 'var(--bg-brand-primary)',
					skeleton: 'var(--bg-brand-primary-skeleton)'
				},
				btn: {
					primary: 'var(--bg-btn-primary)',
					secondary: 'var(--bg-btn-secondary)',
					tertiary: 'var(--bg-btn-tertiary)',
					quaternary: 'var(--bg-btn-quaternary)'
				},
				'modal-primary': {
					DEFAULT: 'var(--bg-modal-primary)',
					transparent: 'var(--bg-modal-primary-transparent)'
				},
				'modal-header-primary': {
					DEFAULT: 'var(--bg-modal-header-primary)'
				},
				'device-primary': 'var(--bg-device-primary)',
				'line-primary': 'var(--bg-line-primary)',
				notification: {
					'primary-active': 'var(--notification-primary-active)',
					secondary: 'var(--notification-secondary)',
					tertiary: 'var(--notification-tertiary)'
				}
			},
			textColor: {
				foreground: {
					primary: 'var(--text-foreground-primary)',
					secondary: 'var(--text-foreground-secondary)',
					tertiary: 'var(--text-foreground-tertiary)',
					emphasis: 'var(--text-foreground-emphasis)'
				},
				modal: {
					primary: 'var(--text-modal-primary)',
					secondary: 'var(--text-modal-secondary)'
				},
				btn: {
					primary: 'var(--text-btn-primary)',
					white: 'var(--text-btn-white)'
				}
			},
			borderColor: {
				primary: 'var(--border-primary)',
				secondary: 'var(--border-secondary)'
			},
			colors: {
				'activity-indicator': 'var(--activity-indicator)',
				'gradient-control-start': 'var(--gradient-control-start)',
				'gradient-control-mid1': 'var(--gradient-control-mid1)',
				'gradient-control-mid2': 'var(--gradient-control-mid2)',
				'gradient-control-end': 'var(--gradient-control-end)',
				'gradient-from': 'var(--gradient-from)',
				'gradient-to': 'var(--gradient-to)',
				'gradient-weather-start': 'var(--gradient-weather-start)',
				'gradient-weather-mid1': 'var(--gradient-weather-mid1)',
				'gradient-weather-mid2': 'var(--gradient-weather-mid2)',
				'gradient-weather-end': 'var(--gradient-weather-end)'
			}
		}
	},
	plugins: []
}
