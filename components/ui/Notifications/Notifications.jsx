import { memo } from 'react'
import { View, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { IconSymbol } from '@/components/ui/Icons/IconSymbol'
import { useColorScheme } from '@/lib/useColorScheme'
import { colors } from '@/constants/colors'
import NotificationBadge from '@/components/ui/Notifications/NotificationBadge'
import NotificationElement from '@/components/ui/Notifications/NotificationElement'
import { Text } from '@/components/text'
import useNotifications from '@/hooks/useNotifications'

const Notifications = memo(function Notifications({
	showNotifications,
	handleNotificationPress,
	handleClearNotifications
}) {
	const { isDarkColorScheme } = useColorScheme()
	const {
		notifications,
		numOfNotifications,
		onPressClearNotifications,
		onPressNotification
	} = useNotifications({ handleClearNotifications, handleNotificationPress })

	return (
		<View className='mb-6 h-10 w-full flex-row items-center justify-start'>
			<TouchableOpacity
				accessibilityRole='button'
				hitSlop={20}
				onPress={onPressNotification}
				className={`relative z-10 h-11 w-11 items-center justify-center rounded-full border border-border p-1 ${showNotifications ? 'bg-active-notification-bg' : ''}`}
				disabled={notifications.length === 0}
			>
				<IconSymbol
					name='notifications-none'
					size={28}
					color={
						isDarkColorScheme ? colors.dark.foreground : colors.light.foreground
					}
				/>
				{notifications.length > 0 && (
					<NotificationBadge count={numOfNotifications} />
				)}
			</TouchableOpacity>

			{showNotifications && (
				<View className='absolute left-0 top-12 z-20 h-64 w-2/3 rounded-lg bg-notification-view-bg p-4'>
					<ScrollView>
						{notifications.map((notification, index) => (
							<NotificationElement notification={notification} key={index} />
						))}
					</ScrollView>
					<Pressable
						onPress={onPressClearNotifications}
						className='mt-3 items-center rounded-lg bg-red-500 p-2 active:bg-red-700'
					>
						{({ pressed }) => (
							<Text
								style={{
									color: pressed ? colors.dark.clearNotificationsText : 'white'
								}}
								className='font-bold'
							>
								Limpiar todo
							</Text>
						)}
					</Pressable>
				</View>
			)}
		</View>
	)
})

export default Notifications
