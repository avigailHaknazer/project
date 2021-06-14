const router = require('express').Router()
const dataController= require('./controllers/dataController')

router.get('/getAllData',dataController.getAllData)
router.post('/saveData',dataController.saveData)

module.exports=router