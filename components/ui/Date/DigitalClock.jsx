import { memo } from 'react'
import useTime from '@/hooks/useTime'
import { Text } from '@/components/text'
import { formatHour } from '@/lib/utils'

const DigitalClock = memo(function DigitalClock() {
	const { time } = useTime()

	return (
		<Text className='text-foreground text-3xl font-bold'>
			{formatHour(time)}
		</Text>
	)
})

export default DigitalClock
