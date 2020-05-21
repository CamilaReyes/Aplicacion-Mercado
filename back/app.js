const express= require('express')
/* REQUERIMOS EXPRESS */
const app= express();
/* CONVERTIMOS EXPRESS EN UN OBJETO */

const ProductoRuta= require('./rutas/productoRutas')
/* REQUERIMOS EL MODULO DE RUTAS */
app.use( (req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  // todos los metadatos - cookies
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  // todos los métodos http - métodos de petición
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // Confirmación estricta de los métodos a utilizar
  res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');

  next();

} )

/* MIDDLEWARE
Logica de intercambio de informacion entre app */
app.use(express.json());
app.use('/api',ProductoRuta)
/* CREAMOS LA RUTA PARA ACCEDER A NUESTRA API */

module.exports= app;
/* EXPORTAMOS EL MODULO CON LA LOGICA DE EXPRESS */