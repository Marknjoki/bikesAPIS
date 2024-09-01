const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const mongoose = require('mongoose')


mongoose.connect(process.env.CONN_STR,
    { useNewUrlParser: true }
).then((connection) => {
    console.log("Database connected")
}).catch((err) => {
    console.log(err)
})
const app = require('./app')

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log('server is running on port 5050.....')

})