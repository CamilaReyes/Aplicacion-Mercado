const mongoose= require('mongoose')
/* REQUERIMOS LA LIBRERIA EN NUESTRO PROYECTO */
const app=require('./app')
mongoose.connect('mongodb://localhost:27017/MercadoBIT',{useNewUrlParser:true,
useUnifiedTopology:true}, (error,res)=>{
    if (error) {
        console.log("Error al conectarnos con la BD")
    } else {
        console.log("Nos conectamos correctamente")
        app.listen(3000,()=>{
            console.log("Estamos conectados en el puerto 3000")
        })
    }
})

/* connect: es el metodo de mongoose el nos permitira conectarnos a nuestra
base de datos y esta resive estos para metros.

String o ruta de conexion
MONGODB: Es el motor de BD
LOCALHOST: Es el servidor
PUERTO 27017
BD a la que nos vamos a conectar y vamos el CRUD

useNewUrlParser: es una analizador de cadenas el cual le debemos especificar
el puerto donde escuchara mongoDB

useUnifiedTopology: Escucha la solicitud-request y lo monitorea. Nos permite
la administracion del controlador de MongoDB

(error,res))=>{}  Funcion que nos permite validar si la conexion fue exitosa
*/

