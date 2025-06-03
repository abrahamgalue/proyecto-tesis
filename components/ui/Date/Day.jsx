import { memo, useMemo } from 'react'
import { formatDate } from '@/lib/utils'
import { Text } from '@/components/text'

const Day = memo(function Day() {
	const nowDate = useMemo(() => formatDate())

	return (
		<Text className='text-foreground text-lg mb-3 capitalize'>{nowDate}</Text>
	)
})

export default Day
