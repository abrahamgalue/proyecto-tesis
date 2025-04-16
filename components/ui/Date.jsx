import { formatDate } from '@/lib/utils'
import { Text } from '@/components/text'

function Day() {
	return (
		<Text
			style={{ fontFamily: 'Inter' }}
			className='text-foreground text-lg mb-3 capitalize'
		>
			{formatDate()}
		</Text>
	)
}

export default Day
