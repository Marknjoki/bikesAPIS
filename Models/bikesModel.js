const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'bike name is required'],
            trim: true,
        },
        model: Number,
        color: [String],
        weight: String,
        seat_height: String,
        cc: Number,
        price: {
            type: Number,
            required: [true, 'price is required'],
        },
        image: String,
        description: String,

    }
)

const Bike = mongoose.model('Bike', schema)


module.exports = Bike