import { memo } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/text'

const NotificationBadge = memo(function NotificationBadge({ count }) {
	return (
		<View className='absolute top-0 right-0 bg-notification-num rounded-full w-4 h-4 justify-center items-center'>
			<Text className='text-white text-[10px] font-bold'>{count}</Text>
		</View>
	)
})

export default NotificationBadge
