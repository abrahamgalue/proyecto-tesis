import { useMemo } from 'react'
import { formatDate } from '@/lib/formatters'
import { Text } from '@/components/ui/text'

function Day() {
	const date = useMemo(() => formatDate())

	return (
		<Text className='text-foreground-primary mb-3 text-lg capitalize'>
			{date}
		</Text>
	)
}

export default Day
