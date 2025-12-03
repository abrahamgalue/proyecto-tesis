import express from 'express'
import { randomInRange } from '../lib/utils.js'

const app = express()

app.disable('x-powered-by')

const port = process.env.PORT || 3000

app.get('/', (_req, res) => {
	res.send('Green Wall Manager: Sensors API')
})

app.get('/api/sensors', (_req, res) => {
	res.json({
		waterLevel: `${randomInRange(40, 95)}%`,
		soilTemp: `${randomInRange(18, 32)}°C`,
		substrateTemp: `${randomInRange(16, 28)}°C`,
		phLevel: randomInRange(5.8, 6.8, 2),
		waterFlowObstruction: `${randomInRange(0, 15)}%`
	})
})

app.listen(port, () => {
	console.log(`Sensors API listening on http://localhost:${port}`)
})
