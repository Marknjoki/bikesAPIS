const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const express = require('express')
const app = express()
const fs = require('fs')
const morgan = require('morgan')




//LOGGER MIDDLEWARE
const logger = (req, res, next) => {
    let requestedAt = new Date()
    let log = `${requestedAt} ${req.method} ${req.url}`
    console.log(log)
    next();
}
const router = require('./routes/bikeRoutes')


//MIDDDLEWARE TO PARSE JSON
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(logger)


app.use('/api/v1/sportbikes', router)

module.exports = app
