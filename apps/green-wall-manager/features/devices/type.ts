export enum DeviceType {
	Bomb = 'bomb',
	Light = 'light'
}

export enum FilterTypes {
	All = 'all',
	Bomb = 'bomb',
	Light = 'light'
}

export interface Device {
	id: string
	name: string
	type: DeviceType
	isOn: boolean
	location: string
	brightness: number
	color: string
}
