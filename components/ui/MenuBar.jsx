import { memo } from 'react'
import useModal from '@/hooks/useModal'
import ModalSettings from '@/components/ui/ModalSettings'
import SettingsHeader from '@/components/ui/SettingsHeader'
import {
	NotificationsSettingsBtn,
	AboutBtn,
	SignOutBtn
} from '@/components/ui/SettingsButtons'
import ActionBar from '@/components/ui/ActionBar'
import {
	AccountBtn,
	ControlBtn,
	SettingsBtn
} from '@/components/ui/MenuBarButtons'

function MenuBar() {
	const { visible, handleShowModal, handleHideModal } = useModal()

	return (
		<>
			<ModalSettings
				visible={visible}
				onClose={handleHideModal}
				title='CONFIGURACIÓN'
			>
				<SettingsHeader />

				<NotificationsSettingsBtn onPress={handleHideModal} />

				<AboutBtn />

				<SignOutBtn />
			</ModalSettings>

			<ActionBar className='px-[5%] py-3'>
				<ControlBtn />
				<AccountBtn />
				<SettingsBtn handleShowModal={handleShowModal} />
			</ActionBar>
		</>
	)
}

export default memo(MenuBar)
