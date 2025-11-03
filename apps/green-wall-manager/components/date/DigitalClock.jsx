import useTime from '@/hooks/useTime'
import { Text } from '@/components/ui/text'
import { formatHour } from '@/lib/formatters'

function DigitalClock() {
	const { time } = useTime()

	return (
		<Text className='text-foreground-primary text-3xl font-bold'>
			{formatHour(time)}
		</Text>
	)
}

export default DigitalClock
