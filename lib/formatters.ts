export function padZero(num: number) {
	return (num < 10 ? '0' : '') + num
}

export function to12HourFormat(hour: number) {
	return hour % 12 || 12
}

export function formatHour(time: Date) {
	let hours = to12HourFormat(time.getHours())
	let minutes = time.getMinutes()

	return `${padZero(hours)}:${padZero(minutes)}`
}

export function formatDate() {
	const date = new Date()
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		month: 'short',
		day: 'numeric'
	}
	const formattedDateParts = date
		.toLocaleDateString('es-VE', options)
		.replace('.', '')
		.split(', ')

	return formattedDateParts.join(' | ')
}

export function formatTemp(temp: string) {
	if (typeof temp !== 'string') return '32'

	const parts = temp.split(',')

	if (parts.length !== 2) return '32'

	const integerPart = parseInt(parts[0])

	return isNaN(integerPart) ? '32' : String(integerPart)
}

export function formatUVIndex(indiceUV: string) {
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

export function getUVIndex(indice: number) {
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

export function formatSpeedWind(velocidadViento: string) {
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

export function formatSensation(sensacionTermicaSol: string) {
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

	return Math.trunc(num).toString()
}
