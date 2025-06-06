import { useState, useCallback } from 'react'
import { ScrollView } from 'react-native'
import useWeatherData from '@/hooks/useWeatherData'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import Notifications from '@/components/ui/Notifications/Notifications'
import WeatherCard from '@/components/ui/WeatherCard/WeatherCard'
import Monitoring from '@/components/ui/Monitoring/Monitoring'
import ControlBar from '@/components/ui/ControlBar'
import Footer from '@/components/ui/Footer'

function App() {
	const { weatherData } = useWeatherData()
	const [isWeatherDataMoreShow, setIsWeatherDataMoreShow] = useState(false)
	const [showNotifications, setShowNotifications] = useState(false)

	const handleNotificationPress = useCallback(() => {
		setShowNotifications(!showNotifications)
	}, [showNotifications])

	const handleClearNotifications = useCallback(() => {
		setShowNotifications(false)
	}, [showNotifications])

	const handleWeatherDataMore = useCallback(() => {
		setIsWeatherDataMoreShow(!isWeatherDataMoreShow)
	}, [isWeatherDataMoreShow])

	return (
		<SafeAreaView>
			<ScrollView
				scrollEnabled={!showNotifications}
				className='bg-background'
				contentContainerClassName='grow justify-between'
			>
				<GradientBackground
					className='flex-1 px-[5%] pt-5 pb-[15px] items-center justify-center'
					type='screen'
				>
					<Notifications
						showNotifications={showNotifications}
						handleNotificationPress={handleNotificationPress}
						handleClearNotifications={handleClearNotifications}
					/>

					<WeatherCard
						weatherData={weatherData}
						isWeatherDataMoreShow={isWeatherDataMoreShow}
						handleWeatherDataMore={handleWeatherDataMore}
					/>

					<Monitoring weatherData={weatherData} />

					<ControlBar />

					<Footer />
				</GradientBackground>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App
