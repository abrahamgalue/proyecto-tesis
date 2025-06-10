import { useState, useCallback } from 'react'

function useShowNotifications() {
	const [showNotifications, setShowNotifications] = useState(false)

	const handleNotificationPress = useCallback(() => {
		setShowNotifications(!showNotifications)
	}, [showNotifications])

	const handleClearNotifications = useCallback(() => {
		setShowNotifications(false)
	}, [showNotifications])

	return {
		showNotifications,
		handleNotificationPress,
		handleClearNotifications
	}
}

export default useShowNotifications
