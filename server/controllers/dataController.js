const Data = require('../model/data')

const saveData = async (req, res) => {
    debugger
    try {
        let data = new Data(req.body)
        await data.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllData = async (req, res) => {
    try {
        let allData = await Data.find()
        res.status(200).json(allData)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={
    saveData,
    getAllData
}