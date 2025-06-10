import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

export function padZero(num) {
	return (num < 10 ? '0' : '') + num
}

export function to12HourFormat(hour) {
	return hour % 12 || 12
}

export function formatHour(time) {
	let hours = to12HourFormat(time.getHours())
	let minutes = time.getMinutes()

	return `${padZero(hours)}:${padZero(minutes)}`
}

export function formatDate() {
	const date = new Date()
	const options = { weekday: 'long', month: 'short', day: 'numeric' }
	const formattedDateParts = date
		.toLocaleDateString('es-VE', options)
		.replace('.', '')
		.split(', ')

	return formattedDateParts.join(' | ')
}

export function formatTemp(temp) {
	if (typeof temp !== 'string') return '32'

	const parts = temp.split(',')

	if (parts.length !== 2) return '32'

	const integerPart = parseInt(parts[0])

	return isNaN(integerPart) ? '32' : String(integerPart)
}

export function formatUVIndex(indiceUV) {
	if (typeof indiceUV !== 'string') {
		return { index: '1.3', state: 'Bajo' }
	}
	const numStr = indiceUV.replace(',', '.')
	const num = Number(numStr)

	if (isNaN(num)) {
		return { index: '1.3', state: 'Bajo' }
	}

	const state = getUVIndex(num)
	const index = num.toFixed(1)

	return { index, state }
}

export function getUVIndex(indice) {
	if (indice >= 0 && indice <= 2) {
		return 'Bajo'
	} else if (indice > 2 && indice <= 5) {
		return 'Moderado'
	} else if (indice > 5 && indice <= 7) {
		return 'Alto'
	} else if (indice > 7 && indice <= 10) {
		return 'Muy alto'
	} else if (indice > 10) {
		return 'Extremo'
	} else {
		return 'Desconocido'
	}
}

export function formatSpeedWind(velocidadViento) {
	if (typeof velocidadViento !== 'string') {
		return { speed: '40', unit: 'km/h' }
	}
	const viento = velocidadViento.split(' ', 2)
	if (viento.length !== 2) {
		return { speed: '40', unit: 'km/h' }
	}

	const [speed, unit] = viento
	return { speed, unit }
}

export function formatSensation(sensacionTermicaSol) {
	let num

	if (typeof sensacionTermicaSol === 'string') {
		num = parseFloat(sensacionTermicaSol)
	} else if (typeof sensacionTermicaSol === 'number') {
		num = sensacionTermicaSol
	} else {
		return '30'
	}

	if (isNaN(num)) {
		return '30'
	}

	return (~~num).toString()
}

const isPercentage = (value) => typeof value === 'string' && value.endsWith('%')

export const LINE_ERR_MSG =
	"Invalid dimensions: Only one of 'width' or 'height' can be greater than 1 or a percentage to render a line."

export const isValidLine = ({ height, width }) => {
	if (
		(width > 1 || isPercentage(width)) &&
		(height > 1 || isPercentage(height))
	) {
		throw new Error(LINE_ERR_MSG)
	}
}

export const initialNotifications = [
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

export const getTextSize = ({ isLargeText, unit }) => {
	const textSize = isLargeText
		? 'text-4xl h-8'
		: unit.length > 5
			? 'text-xs'
			: ''
	const newUnit = unit.length >= 5 ? unit.slice(0, 3) + '...' : unit

	return {
		className: textSize,
		displayUnit: newUnit
	}
}
