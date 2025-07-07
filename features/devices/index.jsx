import { useEffect } from 'react'
import { View } from 'react-native'
import {
	useDevicesReadOnly,
	useDevicesActions,
	useDevicesHydrated
} from '@/store/devicesStore'
import { useEditActions } from '@/store/editStore'
import { router } from 'expo-router'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/gradient-background'
import Card from '@/components/ui/card'
import CardTitle from '@/components/ui/card/card-title'
import BackBtn from '@/components/ui/back-btn'
import Date from '@/components/date'
import FiltersBtn from '@/features/devices/components/filters'
import DevicesList from '@/features/devices/components/list'
import ControlBar from '@/features/devices/components/controlbar'
import Footer from '@/components/Footer'

function ControlScreen() {
	const devicesReadOnly = useDevicesReadOnly()
	const { fetchDevices } = useDevicesActions()
	const hydrated = useDevicesHydrated()
	const { setEdited } = useEditActions()

	useEffect(() => {
		if (hydrated && (!devicesReadOnly || devicesReadOnly.length === 0)) {
			fetchDevices()
		}
	}, [hydrated])

	const handleBack = () => {
		setEdited(false)
		router.back()
	}

	return (
		<SafeAreaView className='flex-1 bg-brand-primary'>
			<View className='flex-1 bg-brand-primary'>
				<GradientBackground
					className='flex-1 items-center justify-center px-[5%] pb-[15px] pt-5'
					type='screen'
				>
					<Card className='mt-[60px] flex-1' imgClassName='bottom-0'>
						<View className='relative w-full px-5 pt-5'>
							<CardTitle>CONTROL</CardTitle>
							<BackBtn
								hitSlop={20}
								onPress={handleBack}
								className='absolute -top-11 right-3'
							/>

							<Date className='flex items-center py-8' />
							<FiltersBtn />
						</View>

						<DevicesList />
					</Card>

					<ControlBar />
					<Footer />
				</GradientBackground>
			</View>
		</SafeAreaView>
	)
}

export default ControlScreen
