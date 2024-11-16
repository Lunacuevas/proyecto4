const express = require('express')
const app = express()
const reservasRutas = require('./src/rutas/reservasRutas.js')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/api',reservasRutas)

app.listen(3000,()=> {
    console.log('estamos conectados')} )

