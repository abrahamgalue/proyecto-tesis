import { ScrollView } from 'react-native'
import { SafeAreaView } from '@/components/safe-area-view'
import GradientBackground from '@/components/ui/gradient-background'
import { useShowNotifications } from '@/store/notificationsStore'
import Notifications from '@/features/weather/components/notifications'
import WeatherCard from '@/features/weather/components/weathercard'
import Monitoring from '@/features/weather/components/monitoring'
import MenuBar from '@/features/weather/components/menubar'
import Footer from '@/components/Footer'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const weather = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2
		}
	}
})

function MainScreen() {
	const showNotifications = useShowNotifications()

	return (
		<QueryClientProvider client={weather}>
			<SafeAreaView className='bg-brand-primary flex-1'>
				<ScrollView
					className='bg-brand-primary'
					contentContainerClassName='grow justify-between'
					scrollEnabled={!showNotifications}
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

export default MainScreen
