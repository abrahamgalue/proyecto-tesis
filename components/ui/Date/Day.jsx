import { useMemo } from 'react'
import { formatDate } from '@/lib/utils'
import { Text } from '@/components/text'

function Day() {
	const nowDate = useMemo(() => formatDate())

	return (
		<Text className='text-foreground-primary mb-3 text-lg capitalize'>
			{nowDate}
		</Text>
	)
}

export default Day
