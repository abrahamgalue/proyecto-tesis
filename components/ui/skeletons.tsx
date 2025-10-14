import { memo } from 'react'
import { DimensionValue, View } from 'react-native'
import { cn } from '@/lib/utils'

interface SkeletonProps {
	width?: DimensionValue
	height?: DimensionValue
	className?: string
}

export const GenericSkeleton = memo(function GenericSkeleton({
	width,
	height,
	className = ''
}: SkeletonProps) {
	const styleClass = cn(
		'bg-brand-primary-skeleton animate-pulse rounded-md',
		className
	)

	const style = {
		...(width !== undefined ? { width } : {}),
		...(height !== undefined ? { height } : {})
	}

	return <View className={styleClass} style={style} />
})

interface DevicesSkeletonsProps {
	itemSize: DimensionValue
}

export const DevicesSkeletons = memo(function DevicesSkeletons({
	itemSize
}: DevicesSkeletonsProps) {
	return (
		<View className='mt-2 flex-1 flex-row flex-wrap justify-between px-6'>
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
		</View>
	)
})
