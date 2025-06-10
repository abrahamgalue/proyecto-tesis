import { ScrollView } from 'react-native'
import useWeatherData from '@/hooks/useWeatherData'
import useToggleWeatherDetails from '@/hooks/useToggleWeatherDetails'
import useShowNotifications from '@/hooks/useShowNotifications'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import Notifications from '@/components/ui/Notifications/Notifications'
import WeatherCard from '@/components/ui/WeatherCard/WeatherCard'
import Monitoring from '@/components/ui/Monitoring/Monitoring'
import MenuBar from '@/components/ui/MenuBar'
import Footer from '@/components/ui/Footer'

function App() {
	const { weatherData } = useWeatherData()
	const { showDetails, toggleDetails } = useToggleWeatherDetails()
	const {
		showNotifications,
		handleNotificationPress,
		handleClearNotifications
	} = useShowNotifications()

	return (
		<SafeAreaView>
			<ScrollView
				scrollEnabled={!showNotifications}
				className='bg-background'
				contentContainerClassName='grow justify-between'
			>
				<GradientBackground
					className='flex-1 items-center justify-center px-[5%] pb-[15px] pt-5'
					type='screen'
				>
					<Notifications
						showNotifications={showNotifications}
						handleNotificationPress={handleNotificationPress}
						handleClearNotifications={handleClearNotifications}
					/>

					<WeatherCard
						weatherData={weatherData}
						showDetails={showDetails}
						toggleDetails={toggleDetails}
					/>

					<Monitoring weatherData={weatherData} />

					<MenuBar />

					<Footer />
				</GradientBackground>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App
