import useTime from '@/hooks/useTime'
import { Text } from '@/components/text'
import { formatHour } from '@/lib/utils'

function DigitalClock() {
	const { time } = useTime()

	return (
		<Text className='text-3xl font-bold text-foreground'>
			{formatHour(time)}
		</Text>
	)
}

export default DigitalClock
