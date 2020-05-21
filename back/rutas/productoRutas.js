const express= require('express')

const api= express.Router();
/* ESTE METODO ME PERMITE CONFIGURAR LAS RUTAS */
const productoControl= require('../control/productoControl')
/* IMPORTAMOS O REQUERIMOS EL CONTROL */

api.post('/crear', productoControl.crearProducto)
/* CREAMOS LA RUTA DE CREACION */
api.get('/mostrar', productoControl.obtenerProducto )
/* CREAMO LA RUTA DE MOSTRAR U OBTENER LOS DATOS */
api.put('/actualizar/:id', productoControl.actualizarProducto)
/* ACTUALIZAR PRODUCTO */
api.delete('/eliminar/:id', productoControl.eliminarProducto)
/* ELIMINAR PRODUCTO */

module.exports= api;
/* EXPORTAMOS LAS RUTAS PARA QUE PUEDAN SER UTILIZADAS
EN NUESTRO PROYECTO */