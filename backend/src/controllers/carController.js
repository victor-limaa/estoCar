const Car = require('../models/Car')
const Cliente = require('../models/Cliente')

carController = {
    cadastrar: async function (req, res) {

        const selectedCar = await Car.findOne({placa: req.body.placa})
        if(selectedCar) return res.status(400).send('Veículo já cadastrado!')

        const car = new Car({
            marca: req.body.marca ,
            modelo: req.body.modelo,
            placa: req.body.placa,
            opcionais: req.body.opcionais,
            cambio: req.body.cambio,
            cor: req.body.cor,
            valor: req.body.valor,
            cliente: null
        })

        try{
            const savedCar = await car.save()
            res.send(savedCar)
        } catch(err){
            res.send(err)
        }
    },

    listar: function (req, res){
        const listCar = JSON.stringify(Car)
        console.log(listCar)
        res.send(listCar)
    },

    visualizar: async function (req, res){
        const viewCar = await Car.findOne({id: req.params._id})
        res.send(viewCar)
    },

    reservar: async function (req, res){


        const cliente = new Cliente({
            nome: req.body.nome,
            whatsapp: req.body.whatsapp,
            email: req.body.email
        })

        const clienteSaved = await cliente.save()
        const selectedCar = await Car.findOne({id: req.params._id})

        try {
            const carReserved = await selectedCar.set({cliente: clienteSaved.nome})
            res.send(carReserved)
        } catch(err){
            res.send(err)
        }
    }
}

module.exports = carController