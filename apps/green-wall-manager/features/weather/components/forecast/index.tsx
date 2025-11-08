import { Fragment, memo } from 'react'
import { View } from 'react-native'
import useForecastData from '@/features/weather/hooks/useForecastData'
import Line from '@/components/ui/line'
import { GenericSkeleton } from '@/components/ui/skeletons'
import { getForecastIcon } from '@/features/weather/lib/utils'
import { ForecastType } from '@/features/weather/type'
import ForecastDay from '@/features/weather/components/forecast/ForecastDay'

function ForecastSection() {
	const forecast = useForecastData()

	if (forecast.isLoading) {
		return (
			<View className='mt-[15px] flex-row justify-between pt-[15px]'>
				<GenericSkeleton className='flex-1' height={105} />
				<Line height='55%' />
				<GenericSkeleton className='flex-1' height={105} />
				<Line height='55%' />
				<GenericSkeleton className='flex-1' height={105} />
			</View>
		)
	}

	return (
		<View className='mt-[15px] flex-row justify-between pt-[15px]'>
			{forecast.data?.forecastDays.map(
				({ day, detail, temp, type }, index, array) => {
					const Icon = getForecastIcon(type as ForecastType)
					const isLast = index === array.length - 1

					return (
						<Fragment key={index}>
							<ForecastDay
								day={day}
								detail={detail}
								temp={temp}
								icon={<Icon />}
							/>
							{!isLast && <Line height='55%' />}
						</Fragment>
					)
				}
			)}
		</View>
	)
}

export default memo(ForecastSection)
