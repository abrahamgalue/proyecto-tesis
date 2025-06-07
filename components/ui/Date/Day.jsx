import { memo, useMemo } from 'react'
import { formatDate } from '@/lib/utils'
import { Text } from '@/components/text'

const Day = memo(function Day() {
	const nowDate = useMemo(() => formatDate())

	return (
		<Text className='mb-3 text-lg capitalize text-foreground'>{nowDate}</Text>
	)
})

export default Day
