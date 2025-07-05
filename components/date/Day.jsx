import { useMemo } from 'react'
import { formatDate } from '@/lib/formatters'
import { Text } from '@/components/ui/text'

function Day() {
	const date = useMemo(() => formatDate())

	return (
		<Text className='mb-3 text-lg capitalize text-foreground-primary'>
			{date}
		</Text>
	)
}

export default Day
