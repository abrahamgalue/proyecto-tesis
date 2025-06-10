import { memo } from 'react'
import { cn } from '@/lib/utils'
import GradientBackground from '@/components/ui/GradientBackground'
import CardImgBackground from '@/components/ui/CardImgBackground'

const Card = memo(function Card({
	children,
	className = '',
	imgClassName = ''
}) {
	const bgStylesClass = cn('relative w-full', className)

	return (
		<GradientBackground className={bgStylesClass} type='card'>
			<CardImgBackground imgClassName={imgClassName} />
			{children}
		</GradientBackground>
	)
})

export default Card
