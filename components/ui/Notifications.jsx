import { useState } from 'react'
import { View, Pressable, ScrollView, Text } from 'react-native'
import { IconSymbol } from './IconSymbol'
import { useColorScheme } from '@/lib/useColorScheme'
import { colors } from '@/constants/colors'
import { TemperatureSubstrateIcon, WaterObstructionIcon } from './Icons'

const Notifications = ({
	showNotifications,
	handleNotificationPress,
	handleClearNotifications
}) => {
	const { isDarkColorScheme } = useColorScheme()
	const [notifications, setNotifications] = useState([
		{ type: 'waterLevel', content: '60% de agua restante' },
		{ type: 'waterObstruction', content: '0.5% obstrucción' },
		{ type: 'waterObstruction', content: '0.5% obstrucción' },
		{ type: 'waterObstruction', content: '0.5% obstrucción' },
		{ type: 'waterObstruction', content: '0.5% obstrucción' },
		{ type: 'waterObstruction', content: '0.5% obstrucción' },
		{ type: 'waterLevel', content: '60% de agua restante' }
	])

	const onPressNotification = () => {
		if (notifications.length > 0) {
			handleNotificationPress()
		}
	}

	const onPressClearNotifications = () => {
		setNotifications([])
		handleClearNotifications()
	}

	return (
		<View className='w-full flex-row h-10 items-center justify-start mb-6'>
			<Pressable
				hitSlop={25}
				onPress={onPressNotification}
				className={`relative rounded-full p-1 border border-border h-11 w-11 items-center justify-center active:scale-90 ${showNotifications ? 'bg-active-notification-bg' : ''}`}
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
					<View className='absolute top-0 right-0 bg-notification-num rounded-full w-4 h-4 justify-center items-center'>
						<Text className='text-white text-[10px] font-bold'>
							{notifications.length < 10 ? notifications.length : '+9'}
						</Text>
					</View>
				)}
			</Pressable>

			{showNotifications && (
				<View className='absolute top-12 left-0 bg-notification-view-bg rounded-lg p-4 h-64 w-2/3 z-50'>
					<ScrollView>
						{notifications.map((notification, index) => {
							const IconComponent =
								notification.type === 'waterObstruction'
									? WaterObstructionIcon
									: TemperatureSubstrateIcon
							return (
								<View
									key={index}
									className='flex-row items-center mb-3 border-b border-foreground pb-2'
								>
									{IconComponent && (
										<IconComponent
											width={20}
											height={20}
											color={
												isDarkColorScheme
													? colors.dark.foreground
													: colors.light.foreground
											}
										/>
									)}
									<Text className='ml-3 text-foreground'>
										{notification.content}
									</Text>
								</View>
							)
						})}
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
