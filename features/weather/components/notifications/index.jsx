import { memo } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import {
	useNotifications,
	useShowNotifications,
	useNotificationsActions
} from '@/store/notificationsStore'
import { useColorScheme } from '@/hooks/useColorScheme'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { colors } from '@/constants/colors'
import NotificationBadge from '@/features/weather/components/notifications/NotificationBadge'
import NotificationElement from '@/features/weather/components/notifications/NotificationElement'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'

function Notifications() {
	const notifications = useNotifications()
	const showNotifications = useShowNotifications()
	const { handleNotificationPress, clearNotifications } =
		useNotificationsActions()

	const { isDarkColorScheme } = useColorScheme()

	const numOfNotifications =
		notifications.length < 10 ? notifications.length : '+9'
	const isNotificationPressDisabled = notifications.length === 0

	return (
		<View className='mb-6 h-10 w-full flex-row items-center justify-start'>
			<TouchableOpacity
				accessibilityRole='button'
				hitSlop={20}
				onPress={handleNotificationPress}
				className={cn(
					'relative z-10 h-11 w-11 items-center justify-center rounded-full border border-primary p-1',
					{ 'bg-notification-primary-active': showNotifications }
				)}
				disabled={isNotificationPressDisabled}
			>
				<IconSymbol
					name='notifications-none'
					size={28}
					color={
						isDarkColorScheme
							? colors.dark.textForegroundPrimary
							: colors.light.textForegroundPrimary
					}
				/>
				{notifications.length > 0 && (
					<NotificationBadge count={numOfNotifications} />
				)}
			</TouchableOpacity>

			{showNotifications && (
				<View className='absolute left-0 top-12 z-20 h-64 w-2/3 rounded-lg bg-notification-tertiary p-4'>
					<ScrollView>
						{notifications.map((notification) => (
							<NotificationElement
								notification={notification}
								key={notification.id}
							/>
						))}
					</ScrollView>
					<Button
						title='Limpiar todo'
						className='mt-3 w-full rounded-lg bg-red-500 p-2 active:bg-red-700'
						onPress={clearNotifications}
						textClassName='font-bold'
					/>
				</View>
			)}
		</View>
	)
}

export default memo(Notifications)
