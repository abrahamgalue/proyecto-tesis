import { ScrollView } from 'react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/GradientBackground'
import { useShowNotifications } from '@/store/notificationsStore'
import Notifications from '@/components/ui/Notifications/Notifications'
import WeatherCard from '@/components/ui/WeatherCard/WeatherCard'
import Monitoring from '@/components/ui/Monitoring/Monitoring'
import MenuBar from '@/components/ui/MenuBar'
import Footer from '@/components/ui/Footer'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const weather = new QueryClient()

function App() {
	const showNotifications = useShowNotifications()

	return (
		<QueryClientProvider client={weather}>
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
						<Notifications />
						<WeatherCard />
						<Monitoring />
						<MenuBar />
						<Footer />
					</GradientBackground>
				</ScrollView>
			</SafeAreaView>
		</QueryClientProvider>
	)
}

export default App
