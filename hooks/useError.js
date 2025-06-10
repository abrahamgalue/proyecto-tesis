import { useState } from 'react'

function useError() {
	const [error, setError] = useState(false)

	const handleError = (value) => {
		setError(value)
	}

	return { error, handleError }
}

export default useError
