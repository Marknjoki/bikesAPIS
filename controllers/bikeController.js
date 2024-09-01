

const Bike = require('./../Models/bikesModel')
const mongoose = require('mongoose')

exports.getAllBikes = async (req, res) => {
    try {
        const bikes = await Bike.find()
        res.status(200).json({
            status: "sucess",
            count: bikes.length,
            data: bikes
        })

    } catch (err) {
        res.status(404).send({
            status: 'fail',
            message: err.message
        })
    }
}
exports.addNewBike = async (req, res) => {
    try {
        const newBike = await Bike.create(req.body)
        res.status(201).json({
            status: 'success',
            data: newBike
        })

    } catch (err) {
        res.status(404).send({
            status: 'fail',
            message: err.message
        })
    }

}

exports.getBikeById = async (req, res) => {
    try {
        const bike = await
            Bike.findById(req.params.id)
        // if (!bike) {
        //     return res.status(404).json({
        //         status: 'fail',
        //         message: 'Bike not found'
        //     })
        // }
        res.status(200).json({
            status: 'success',
            data: bike
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}
