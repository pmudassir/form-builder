const express = require('express')
const app = express()
const connectDB = require('./utils/db')

connectDB()

app.listen(4000, () => {
    console.log('Listening on port 4000')
}) 
