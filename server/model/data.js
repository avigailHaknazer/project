const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    fullName: {
        type: String,
        minLength:3
    },
    age: {
        type: String
    },
    cityName: {
        type: String
    },
    emailAddress: {
        type: String
    },
    phoneNumber: {
        type: String
    }
})

module.exports = mongoose.model('data', dataSchema)