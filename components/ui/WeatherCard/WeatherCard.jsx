import { memo } from 'react'
import Card from '@/components/ui/Card'
import { View } from 'react-native'
import WeatherCardLogo from '@/components/ui/WeatherCard/WeatherCardLogo'
import WeatherCardHeader from '@/components/ui/WeatherCard/WeatherCardHeader'
import WeatherCardInfo from '@/components/ui/WeatherCard/WeatherCardInfo'
import Line from '@/components/ui/Line'
import ForecastSection from '@/components/ui/Forecast/ForecastSection'
import WeatherCardDetail from '@/components/ui/WeatherCard/WeatherCardDetail'
import ShowMoreBtn from '@/components/ui/ShowMoreBtn'

const WeatherCard = memo(function WeatherCard({
	weatherData,
	showDetails,
	toggleDetails
}) {
	return (
		<Card className='mb-[30px]'>
			<View className='relative w-full rounded-3xl border border-border p-5'>
				<WeatherCardLogo />
				<WeatherCardHeader />
				<WeatherCardInfo weatherData={weatherData} />
				<Line width='65%' />
				<ForecastSection />
				{showDetails && <WeatherCardDetail weatherData={weatherData} />}
			</View>
			<ShowMoreBtn isShow={showDetails} handleShow={toggleDetails} />
		</Card>
	)
})

export default WeatherCard
