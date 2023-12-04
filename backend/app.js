const express = require('express')
const app = express()
const connectDB = require('./utils/db')
const formRouter = require('./routes/form')
const cors = require('cors')

app.use(cors())

connectDB()

app.use("/api/form", formRouter)

app.listen(4000, () => {
    console.log('Listening on port 4000')
}) 
