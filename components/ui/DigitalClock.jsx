import { useState, useEffect } from 'react'
import { Text } from '@/components/text'
import { formatHour } from '@/lib/utils'

function DigitalClock() {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timeInterval)
	}, [])

	return (
		<Text className='text-foreground text-3xl font-bold'>
			{formatHour(time)}
		</Text>
	)
}

export default DigitalClock
