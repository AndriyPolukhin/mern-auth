import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'

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

// const __dirname = path.resolve()
// app.use(express.static(path.join(__dirname, '/client/dist')))

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

app.use(express.json())
app.use(cookieParser())
app.listen(5000, () => {
	console.log(`Server running on port 5000`)
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

// Using a middleware
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500
	const message = err.message || 'Internal Server Error'
	return res.status(statusCode).json({
		success: false,
		message,
		statusCode,
	})
})
