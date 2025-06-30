import useTime from '@/hooks/useTime'
import { Text } from '@/components/ui/text'
import { formatHour } from '@/lib/utils'

function DigitalClock() {
	const { time } = useTime()

	return (
		<Text className='text-3xl font-bold text-foreground-primary'>
			{formatHour(time)}
		</Text>
	)
}

export default DigitalClock
