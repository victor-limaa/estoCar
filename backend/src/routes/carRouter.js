const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')
const bodyParser = require('body-parser')

router.get('/home', carController.listar)

router.get('/:id', carController.visualizar)

router.post('/newCar', bodyParser, carController.cadastrar)

router.post('/:id/reservar', bodyParser, carController.reservar)


module.exports = router