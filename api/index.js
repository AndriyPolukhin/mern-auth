import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config()

const uri = process.env.MONGO_URL
const clientOptions = {
	serverApi: { version: '1', strict: true, deprecationErrors: true },
}
mongoose
	.connect(uri, clientOptions)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch((err) => {
		console.log(err)
	})
const app = express()

app.listen(5000, () => {
	console.log(`Server running on port 5000`)
})

app.use('/api/user', userRoutes)
