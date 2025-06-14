import {
	padZero,
	to12HourFormat,
	formatHour,
	formatDate,
	formatTemp,
	formatUVIndex,
	formatSpeedWind,
	formatSensation,
	isValidLine,
	getUVIndex,
	getTextSize,
	LINE_ERR_MSG
} from '@/lib/utils'

describe('padZero', () => {
	test('adds a 0 if the number is less than 10', () => {
		expect(padZero(5)).toBe('05')
		expect(padZero(0)).toBe('00')
		expect(padZero(9)).toBe('09')
	})

	test('does not add 0 if the number is 10 or greater', () => {
		expect(padZero(10)).toBe('10')
		expect(padZero(23)).toBe('23')
	})
})

describe('to12HourFormat', () => {
	test('converts 0 to 12 (midnight)', () => {
		expect(to12HourFormat(0)).toBe(12)
	})

	test('converts 12 to 12 (noon)', () => {
		expect(to12HourFormat(12)).toBe(12)
	})

	test('converts 13 to 1 (1 PM)', () => {
		expect(to12HourFormat(13)).toBe(1)
	})

	test('converts 23 to 11 (11 PM)', () => {
		expect(to12HourFormat(23)).toBe(11)
	})

	test('converts 1 to 1 (1 AM)', () => {
		expect(to12HourFormat(1)).toBe(1)
	})
})

describe('formatHour', () => {
	test('formats the hour in hh:mm (12h) format', () => {
		const date = new Date('2023-05-24T14:07:00')
		expect(formatHour(date)).toBe('02:07')
	})
})

describe('formatDate', () => {
	test('returns a formatted date with | separators', () => {
		const result = formatDate()
		expect(typeof result).toBe('string')
		expect(result.includes('|')).toBe(true)
	})
})

describe('formatTemp', () => {
	test('extracts the integer part of the temperature', () => {
		expect(formatTemp('32,4')).toBe('32')
		expect(formatTemp('abc')).toBe('32')
		expect(formatTemp('32')).toBe('32')
		expect(formatTemp(32)).toBe('32')
	})

	test('returns "32" if the integer part is not a number', () => {
		expect(formatTemp('abc,0')).toBe('32')
	})

	test('returns the integer part as string if valid', () => {
		expect(formatTemp('28,0')).toBe('28')
	})
})

describe('formatUVIndex', () => {
	test('formats the UV index and classifies the state correctly', () => {
		expect(formatUVIndex('1,5')).toEqual({ index: '1.5', state: 'Bajo' })
		expect(formatUVIndex('6,3')).toEqual({ index: '6.3', state: 'Alto' })
		expect(formatUVIndex('11')).toEqual({ index: '11.0', state: 'Extremo' })
		expect(formatUVIndex('abc')).toEqual({ index: '1.3', state: 'Bajo' })
		expect(formatUVIndex(11)).toEqual({ index: '1.3', state: 'Bajo' })
	})
})

describe('getUVIndex', () => {
	test('classifies the UV index state correctly', () => {
		expect(getUVIndex(0)).toBe('Bajo')
		expect(getUVIndex(3)).toBe('Moderado')
		expect(getUVIndex(6)).toBe('Alto')
		expect(getUVIndex(8)).toBe('Muy alto')
		expect(getUVIndex(11)).toBe('Extremo')
		expect(getUVIndex('Alto')).toBe('Desconocido')
	})
})

describe('formatSpeedWind', () => {
	test('splits wind speed and unit correctly', () => {
		expect(formatSpeedWind('20 km/h')).toEqual({ speed: '20', unit: 'km/h' })
		expect(formatSpeedWind('abc')).toEqual({ speed: '40', unit: 'km/h' })
		expect(formatSpeedWind(20)).toEqual({ speed: '40', unit: 'km/h' })
	})
})

describe('formatSensation', () => {
	test('rounds and returns thermal sensation as string', () => {
		expect(formatSensation('30.6')).toBe('30')
		expect(formatSensation(28.7)).toBe('28')
		expect(formatSensation('abc')).toBe('30')
		expect(formatSensation(null)).toBe('30')
	})
})

describe('isValidLine', () => {
	test('does not throw if one value is 1 or less', () => {
		expect(() => isValidLine({ width: 1, height: 10 })).not.toThrow()
		expect(() => isValidLine({ width: '100%', height: 1 })).not.toThrow()
	})

	test('throws if both values are greater than 1 or percentages', () => {
		expect(() => isValidLine({ width: 2, height: 2 })).toThrow(LINE_ERR_MSG)
		expect(() => isValidLine({ width: '50%', height: '100%' })).toThrow(
			LINE_ERR_MSG
		)
	})
})

describe('getTextSize', () => {
	test('returns correct classes and display unit based on text size and unit', () => {
		expect(getTextSize({ isLargeText: true, unit: '°C' })).toEqual({
			className: 'text-4xl h-8',
			displayUnit: '°C'
		})

		expect(getTextSize({ isLargeText: false, unit: 'km/h' })).toEqual({
			className: '',
			displayUnit: 'km/h'
		})

		expect(getTextSize({ isLargeText: false, unit: 'porcentual' })).toEqual({
			className: 'text-xs',
			displayUnit: 'por...'
		})

		expect(getTextSize({ isLargeText: false, unit: 'grams' })).toEqual({
			className: '',
			displayUnit: 'gra...'
		})
	})
})
