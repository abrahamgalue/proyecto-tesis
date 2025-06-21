import { memo } from 'react'
import ActionBar from '@/components/ui/ActionBar'
import {
	AccountBtn,
	ControlBtn,
	SettingsBtn
} from '@/components/ui/MenuBarButtons'

function MenuBar() {
	return (
		<>
			<ActionBar className='px-[5%] py-3'>
				<ControlBtn />
				<AccountBtn />
				<SettingsBtn />
			</ActionBar>
		</>
	)
}

export default memo(MenuBar)
