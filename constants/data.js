export const INITIAL_NOTIFICATIONS = [
	{
		id: 'a521eab9-5126-4f2c-8327-066caf5d7a62',
		type: 'waterLevel',
		content: '60% de agua restante'
	},
	{
		id: '906644fa-fb46-4899-8b7a-3251d133825a',
		type: 'waterObstruction',
		content: '0.5% obstrucción'
	}
]

export const INITIAL_DEVICES_DATA = [
	{
		id: '27b484cc-a6ff-4748-8d39-594ec11b45aa',
		name: `Luz`,
		type: 'light',
		isOn: false,
		location: 'Zona sur',
		brightness: 95,
		color: '#FF00D4'
	},
	{
		id: '310e1819-2b99-4b83-8a66-a11c6565c685',
		name: `Bomba`,
		type: 'bomb',
		isOn: true,
		location: 'Zona oeste'
	},
	{
		id: '69682d43-3583-414e-8218-268190e87d3c',
		name: `Luz`,
		type: 'light',
		isOn: true,
		location: 'Jardín',
		brightness: 70,
		color: '#FF1C42'
	},
	{
		id: 'c5fc2879-0561-4eaf-a765-525cb8021e2f',
		name: `Luz`,
		type: 'light',
		isOn: false,
		location: 'Zona sur',
		brightness: 20,
		color: '#1E279E'
	},
	{
		id: '5daf736b-94b6-4af5-885c-4d80af79f706',
		name: `Bomba`,
		type: 'bomb',
		isOn: true,
		location: 'Zona este'
	}
]
