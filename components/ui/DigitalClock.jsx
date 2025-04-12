import { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { formatTime } from '@/lib/utils'

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
			{formatTime(time)}
		</Text>
	)
}

export default DigitalClock
