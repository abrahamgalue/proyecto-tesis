import { useEffect } from 'react'
import { View } from 'react-native'
import { useDevicesActions } from '@/store/devicesStore'
import { useEditActions } from '@/store/editStore'
import { router } from 'expo-router'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import Card from '@/components/ui/Card'
import CardTitle from '@/components/ui/CardTitle'
import BackBtn from '@/components/ui/BackBtn'
import Date from '@/components/ui/Date/Date'
import FiltersBtn from '@/components/ui/FiltersBtn'
import DevicesList from '@/components/ui/DeviceList'
import ControlBar from '@/components/ui/ControlBar'
import Footer from '@/components/ui/Footer'

export default function Control() {
	const { fetchDevices } = useDevicesActions()

	useEffect(() => {
		fetchDevices()
	}, [])

	const { setEdited } = useEditActions()

	const handleBack = () => {
		setEdited(false)
		router.back()
	}

	return (
		<SafeAreaView className='flex-1'>
			<View className='bg-brand-primary flex-1'>
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
