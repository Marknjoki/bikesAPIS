const dotenv = require('dotenv')
dotenv.config({ path: '../config.env' })
const mongoose = require('mongoose')
const fs = require('fs')
const Bike = require("../Models/bikesModel")

mongoose.connect(process.env.CONN_STR)
    .then(console.log('database conected'))
    .catch(err => {
        console.log(err)
    })

const bikes = JSON.parse(fs.readFileSync('../products/bikes.json'))

function createBikes() {
    try {
        Bike.create(bikes)
    }
    catch (err) {
        console.log(err)
    }
}

function deletebikes() {
    try {
        Bike.deleteMany()
    }
    catch (err) {
        console.log(err)
    }
}

// console.log(process.argv)

// 
if (process.argv === 'create') {
    createBikes()
} else if (process.argv === 'delete') {
    deletebikes()
    process.exit()
}
