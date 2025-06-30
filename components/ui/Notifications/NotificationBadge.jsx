import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'

function NotificationBadge({ count }) {
	return (
		<View className='absolute right-0 top-0 h-4 w-4 items-center justify-center rounded-full bg-notification-secondary'>
			<Text className='text-[10px] font-bold text-white'>{count}</Text>
		</View>
	)
}

export default memo(NotificationBadge)
