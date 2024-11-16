const express = require('express')
const rutas = express.Router()
const reservaControlador = require('../controladores/reservaControlador.js')

rutas.post('/',reservaControlador.crearReserva)
rutas.get('/reserva/:id',reservaControlador.obtenerReservaId)
rutas.get('/reserva/',reservaControlador.obtenerReservaPorFechas) 
rutas.get('/reservaPorEstado',reservaControlador.obtenerReservasPorEstado)
module.exports = rutas 
