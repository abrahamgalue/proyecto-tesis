import { memo } from 'react'
import GradientBackground from '@/components/ui/GradientBackground'
import { cn } from '@/lib/utils'

const ActionBar = memo(function ActionBar({
	className = '',
	children,
	...props
}) {
	const stylesClass = cn(
		'mb-5 mt-5 w-[95%] flex-row items-center justify-around rounded-[30px]',
		className
	)
	return (
		<GradientBackground className={stylesClass} type='control' {...props}>
			{children}
		</GradientBackground>
	)
})

export default ActionBar
