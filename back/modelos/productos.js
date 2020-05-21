const mongoose= require('mongoose')

const Schema= mongoose.Schema;
/* CADA ESQUEMA SE ASIGNA A UNA COLECCION MONGODB Y DEFINE LA FORMA DE LOS
DOCUMENTOS DENTRO DE ESTA COLECCION */

/* CREAMOS UNA INSTANCIA DEL OBJETO SCHEMA */

var ProductoSchema= new Schema({
    nombre: String,
    /* Que tipo de parametro va a recibir */
    marca:String,
    precio: Number,
    unidades:Number
})

module.exports= mongoose.model('Producto', ProductoSchema)
/* EXPORTAMOS EL MODULO, ASIGNAMOS EL NOMBRE PARA PODERLO MANIPULAR EN OTRO ARCHIVO
Y INDICAMOS EL NOMBRE DE NUESTRA INSTANCIA */