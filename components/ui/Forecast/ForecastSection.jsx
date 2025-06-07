import { memo } from 'react'
import { View } from 'react-native'
import ForecastDay from '@/components/ui/Forecast/ForecastDay'
import { SunCloudSmall, Sunny } from '@/components/ui/Icons/Icons'
import Line from '@/components/ui/Line'

const ForecastSection = memo(function ForecastSection() {
	return (
		<View className='mt-[15px] flex-row justify-between pt-[15px]'>
			<ForecastDay
				day='Martes'
				icon={<SunCloudSmall />}
				temp='20°/26°'
				detail='74% Nub'
			/>
			<Line height='55%' />
			<ForecastDay
				day='Miércoles'
				icon={<Sunny />}
				temp='26°/29°'
				detail='83% Sol'
			/>
			<Line height='55%' />
			<ForecastDay
				day='Jueves'
				icon={<Sunny />}
				temp='30°/34°'
				detail='88% Sol'
			/>
		</View>
	)
})

export default ForecastSection
