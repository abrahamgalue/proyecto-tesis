import { memo } from 'react'
import { View } from 'react-native'
import { cn } from '@/lib/utils'

export const GenericSkeleton = memo(function GenericSkeleton({
	width,
	height,
	className = ''
}) {
	const styleClass = cn(
		'bg-background-skeleton animate-pulse rounded-md',
		className
	)

	const style = {
		...(width !== undefined ? { width } : {}),
		...(height !== undefined ? { height } : {})
	}

	return <View className={styleClass} style={style} />
})

export const DevicesSkeletons = memo(function DevicesSkeletons({ itemSize }) {
	return (
		<View className='mt-2 flex-1 flex-row flex-wrap justify-between px-6'>
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
			<GenericSkeleton width={itemSize} height={itemSize} className='mb-4' />
		</View>
	)
})
