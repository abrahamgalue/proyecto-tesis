import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

function padZero(num) {
	return (num < 10 ? '0' : '') + num
}

export function formatHour(time) {
	let hours = time.getHours()
	let minutes = time.getMinutes()

	hours = hours % 12 || 12

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
