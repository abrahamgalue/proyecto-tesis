import { useState } from 'react'

function useShowPassword() {
	const [showPass, setShowPass] = useState(false)

	const toggleShowPass = () => {
		setShowPass(!showPass)
	}

	return { showPass, toggleShowPass }
}

export default useShowPassword
