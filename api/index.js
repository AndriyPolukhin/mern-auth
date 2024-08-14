import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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
