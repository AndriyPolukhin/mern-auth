import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose
	.connect(process.env.MONGO_URL)
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

// const uri =
// 	'mongodb+srv://andriypolukhin:BeICPM6AIiG88yTU@mernauthv1.v5n9u.mongodb.net/?retryWrites=true&w=majority&appName=mernauthv1'

// const clientOptions = {
// 	serverApi: { version: '1', strict: true, deprecationErrors: true },
// }

// async function run() {
// 	try {
// 		// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
// 		await mongoose.connect(uri, clientOptions)
// 		await mongoose.connection.db.admin().command({ ping: 1 })
// 		console.log(
// 			'Pinged your deployment. You successfully connected to MongoDB!'
// 		)
// 	} finally {
// 		// Ensures that the client will close when you finish/error
// 		await mongoose.disconnect()
// 	}
// }
// run().catch(console.dir)
