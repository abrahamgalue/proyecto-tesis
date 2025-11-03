import { memo } from 'react'
import ActionBar from '@/components/ui/action-bar'
import {
	AccountBtn,
	ControlBtn,
	SettingsBtn
} from '@/features/weather/components/menubar/MenuBarButtons'

function MenuBar() {
	return (
		<ActionBar className='px-[5%] py-3'>
			<ControlBtn />
			<AccountBtn />
			<SettingsBtn />
		</ActionBar>
	)
}

export default memo(MenuBar)
