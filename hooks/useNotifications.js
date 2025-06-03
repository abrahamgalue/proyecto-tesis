import { useState, useMemo, useCallback } from 'react'
import { initialNotifications } from '@/lib/utils'

const useNotifications = ({
	handleNotificationPress,
	handleClearNotifications
}) => {
	const [notifications, setNotifications] = useState(initialNotifications)
	const numOfNotifications = useMemo(
		() => (notifications.length < 10 ? notifications.length : '+9'),
		[notifications]
	)

	const onPressNotification = useCallback(() => {
		if (notifications.length > 0) {
			handleNotificationPress()
		}
	}, [notifications, handleNotificationPress])

	const onPressClearNotifications = useCallback(() => {
		setNotifications([])
		handleClearNotifications()
	}, [handleClearNotifications])

	return {
		notifications,
		numOfNotifications,
		onPressNotification,
		onPressClearNotifications
	}
}

export default useNotifications
