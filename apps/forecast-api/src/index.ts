import express from 'express'
import { daysOfWeek, FALLBACK_FORECAST } from '../constants/index.js'
import { env } from '../config/index.js'

const app = express()

app.disable('x-powered-by')

const PORT = env.PORT

const API_URL = env.FORECAST_API_URL

app.get('/', (_req, res) => {
	res.send('Green Wall Manager: Forecast API')
})

app.get('/api/forecast', async (_req, res) => {
	try {
		const response = await fetch(API_URL)
		if (!response.ok) throw new Error('Error obtaining forecast data')

		const data = await response.json()

		const forecasts = []

		for (let i = 1; i <= 3; i++) {
			const [_, year, month, day] = /(\d{4})-(\d{1,2})-(\d{1,2})/.exec(
				data.daily.time[i]
			) as RegExpExecArray

			if (!year || !month || !day) {
				throw new Error('Invalid date format')
			}

			const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
			const dayName = daysOfWeek[date.getDay()]

			const min = Math.round(data.daily.temperature_2m_min[i])
			const max = Math.round(data.daily.temperature_2m_max[i])
			const humidity = data.daily.relative_humidity_2m_mean[i]
			const rainProb = data.daily.precipitation_probability_max[i]

			let type = 'sunny'
			let condition = 'Sol'

			if (rainProb >= 50) {
				type = 'rainy'
				condition = 'Llu'
			} else if (rainProb >= 30) {
				type = 'cloudy'
				condition = 'Nub'
			}

			forecasts.push({
				day: dayName,
				type,
				temp: `${min}°/${max}°`,
				detail: `${humidity}% ${condition}`
			})
		}

		res.status(200).json({ forecastDays: forecasts })
	} catch (err) {
		console.error('Error obtaining forecast:', err)
		res.status(200).json(FALLBACK_FORECAST)
	}
})

app.listen(PORT, () => {
	console.log(`Forecast API listening on http://localhost:${PORT}`)
})
