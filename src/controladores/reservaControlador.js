const Reserva = require('../modelos/Reserva.js')
const uuid = require('uuid')
const data = require('../../data.json')


const crearReserva = (req,res)=> {
    const id = uuid.v4()
    const {fechaInicio,fechaTermino,hotel,tipoHabitacion,estado,cantidadHuespedes} = req.body 
    const reserva = new Reserva (id,fechaInicio,fechaTermino,hotel,tipoHabitacion,estado,cantidadHuespedes)
    res.json(reserva) 
}
const obtenerReservaId = (req,res)=> {
    const reserva = data.reservas.find(r => r.id === Number(req.params.id))
   res.json(reserva) 
}
const obtenerReservaPorFechas= (req,res)=> {
    const {fechaInicio,fechaTermino} = req.query
    console.log(req.query)

    if(!fechaInicio || !fechaTermino){
        return res.json('Error')
    }

    const fechaInicioFormateada = new Date(fechaInicio)
    const fechaTerminoFormateada = new Date(fechaTermino)
    console.log(fechaInicioFormateada,fechaTerminoFormateada)

    const reservasFiltradas = data.reservas.filter(reserva => {
        const inicioReserva = new Date(reserva.fechaInicio)
        const finReserva = new Date(reserva.fechaTermino)
        return inicioReserva >= fechaInicioFormateada && finReserva <= fechaTerminoFormateada
    })

   res.json(reservasFiltradas)
}

const obtenerReservasPorEstado = (req,res)=> {
    const reserva = data.reservas.filter(r => r.estado.toUpperCase() === req.query.estado.toUpperCase())
   res.json(reserva) 
}



module.exports = {
    crearReserva,
    obtenerReservaId,
    obtenerReservaPorFechas,
    obtenerReservasPorEstado
}


