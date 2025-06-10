import { useCallback, useState } from 'react'

const useToggleWeatherDetails = () => {
	const [showDetails, setShowDetails] = useState(false)

	const toggleDetails = useCallback(() => {
		setShowDetails(!showDetails)
	}, [showDetails])

	return { showDetails, toggleDetails }
}

export default useToggleWeatherDetails
