import { memo } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import {
	useNotifications,
	useNotificationsActions,
	useShowNotifications
} from '@/store/notificationsStore'
import { useColorScheme } from '@/lib/useColorScheme'
import { colors } from '@/constants/colors'
import NotificationBadge from '@/components/ui/Notifications/NotificationBadge'
import NotificationElement from '@/components/ui/Notifications/NotificationElement'
import Button from '@/components/Button'

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
				className={`relative z-10 h-11 w-11 items-center justify-center rounded-full border border-primary p-1 ${showNotifications ? 'bg-notification-primary-active' : ''}`}
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
				<View className='bg-notification-tertiary absolute left-0 top-12 z-20 h-64 w-2/3 rounded-lg p-4'>
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
