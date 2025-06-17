import { memo } from 'react'
import { View } from 'react-native'
import useToggleWeatherDetails from '@/hooks/useToggleWeatherDetails'
import Card from '@/components/ui/Card'
import WeatherCardLogo from '@/components/ui/WeatherCard/WeatherCardLogo'
import WeatherCardHeader from '@/components/ui/WeatherCard/WeatherCardHeader'
import WeatherCardInfo from '@/components/ui/WeatherCard/WeatherCardInfo'
import Line from '@/components/ui/Line'
import ForecastSection from '@/components/ui/Forecast/ForecastSection'
import WeatherCardDetail from '@/components/ui/WeatherCard/WeatherCardDetail'
import ShowMoreBtn from '@/components/ui/ShowMoreBtn'
import useWeatherData from '@/hooks/useWeatherData'

function WeatherCard() {
	const { data, isLoading } = useWeatherData()
	const { showDetails, toggleDetails } = useToggleWeatherDetails()

	return (
		<Card className='mb-[30px]'>
			<View className='relative w-full rounded-3xl border border-border p-5'>
				<WeatherCardLogo />
				<WeatherCardHeader />
				<WeatherCardInfo data={data} isLoading={isLoading} />
				<Line width='65%' />
				<ForecastSection />
				{showDetails && <WeatherCardDetail data={data} isLoading={isLoading} />}
			</View>
			<ShowMoreBtn isShow={showDetails} handleShow={toggleDetails} />
		</Card>
	)
}

export default memo(WeatherCard)
