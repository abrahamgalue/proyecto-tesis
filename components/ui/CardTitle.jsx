import { memo } from 'react'
import { cn } from '@/lib/utils'
import { Text } from '@/components/text'

function CardTitle({ children, className = '' }) {
	const stylesClass = cn(
		'absolute -top-6 left-3 text-5xl font-bold leading-[48px] text-foreground',
		className
	)

	return <Text className={stylesClass}>{children}</Text>
}

export default memo(CardTitle)
