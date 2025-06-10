import { View } from 'react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import { router } from 'expo-router'
import Date from '@/components/ui/Date/Date'
import Footer from '@/components/ui/Footer'
import { useEffect } from 'react'
import { useDevicesActions } from '@/store/devicesStore'
import Card from '@/components/ui/Card'
import BackBtn from '@/components/ui/BackBtn'
import ControlBar from '@/components/ui/ControlBar'
import CardTitle from '@/components/ui/CardTitle'
import DevicesList from '@/components/ui/DeviceList'
import FiltersBtn from '@/components/ui/FiltersBtn'

export default function Control() {
	const { fetchDevices } = useDevicesActions()

	useEffect(() => {
		fetchDevices()
	}, [])

	return (
		<SafeAreaView className='flex-1'>
			<View className='flex-1 bg-background'>
				<GradientBackground
					className='flex-1 items-center justify-center px-[5%] pb-[15px] pt-5'
					type='screen'
				>
					<Card className='mt-[60px] flex-1' imgClassName='bottom-0'>
						<View className='relative w-full px-5 pt-5'>
							<CardTitle>CONTROL</CardTitle>
							<BackBtn
								hitSlop={20}
								onPress={() => router.back()}
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
