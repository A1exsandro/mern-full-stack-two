import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = process.env.DB_HOST
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
	.catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
