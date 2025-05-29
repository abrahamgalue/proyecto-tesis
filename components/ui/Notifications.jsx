import { View, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { useColorScheme } from '@/lib/useColorScheme'
import { colors } from '@/constants/colors'
import NotificationBadge from '@/components/ui/NotificationBadge'
import NotificationElement from '@/components/ui/NotificationElement'
import { Text } from '@/components/text'
import useNotifications from '@/hooks/useNotifications'

const Notifications = ({
	showNotifications,
	handleNotificationPress,
	handleClearNotifications
}) => {
	const { isDarkColorScheme } = useColorScheme()
	const {
		notifications,
		numOfNotifications,
		onPressClearNotifications,
		onPressNotification
	} = useNotifications({ handleClearNotifications, handleNotificationPress })

	return (
		<View className='w-full flex-row h-10 items-center justify-start mb-6'>
			<TouchableOpacity
				accessibilityRole='button'
				hitSlop={20}
				onPress={onPressNotification}
				className={`relative rounded-full p-1 border z-10 border-border h-11 w-11 items-center justify-center ${showNotifications ? 'bg-active-notification-bg' : ''}`}
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
				<View className='absolute top-12 left-0 bg-notification-view-bg rounded-lg p-4 h-64 w-2/3 z-20'>
					<ScrollView>
						{notifications.map((notification, index) => (
							<NotificationElement notification={notification} key={index} />
						))}
					</ScrollView>
					<Pressable
						onPress={onPressClearNotifications}
						className='mt-3 bg-red-500 active:bg-red-700 rounded-lg p-2 items-center'
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
}

export default Notifications
