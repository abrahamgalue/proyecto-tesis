import { useState } from 'react'
import { initialNotifications } from '@/lib/utils'

const useNotifications = ({
	handleNotificationPress,
	handleClearNotifications
}) => {
	const [notifications, setNotifications] = useState(initialNotifications)
	const numOfNotifications =
		notifications.length < 10 ? notifications.length : '+9'

	const onPressNotification = () => {
		if (notifications.length > 0) {
			handleNotificationPress()
		}
	}

	const onPressClearNotifications = () => {
		setNotifications([])
		handleClearNotifications()
	}

	return {
		notifications,
		numOfNotifications,
		onPressNotification,
		onPressClearNotifications
	}
}

export default useNotifications
