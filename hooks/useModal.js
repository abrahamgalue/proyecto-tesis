import { useCallback, useState } from 'react'

function useModal() {
	const [visible, setVisible] = useState(false)

	const handleShowModal = useCallback(() => setVisible(true), [])
	const handleHideModal = useCallback(() => setVisible(false), [])

	return { visible, handleShowModal, handleHideModal }
}

export default useModal
