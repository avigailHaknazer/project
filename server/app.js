const express=require('express')
const app=express()

const dotenv = require('dotenv')
dotenv.config()
const Router = require('./router')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
app.use(bodyParser.json())
let port=process.env.PORT
app.listen(port, () => { console.log(`listenning to port ${port}`); })
app.use('/', Router)
app.use(cors())

var optionConnection = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}
mongoose.connect(process.env.DB_CONNECT, optionConnection)
    .then(() => { console.log("connected"); })
    .catch((err) => { console.log(`could not connect: ${err}`) });
