const Producto = require('../modelos/productos')
/* TRAIGO EL MODELO DE MI BD */

function crearProducto(req, res) {
    var producto = new Producto();
    /* creamos la instancia donde accedemos al modelo del producto 
    ACCEDEMOS A CADA UNO DE LOS ELEMENTOS DEL MODELO PARA MODIFICARLO O AGREGAR*/
    var parametros = req.body;
    /* Contiene los parametros que se envian desde el cliente como parte de 
    una solicitud */
    producto.nombre = parametros.nombre;
    producto.marca = parametros.marca;
    producto.precio = parametros.precio;
    producto.unidades = parametros.unidades;
    /* GUARDAMOS CADA PROPIEDAD EN EL JSON */

    producto.save((err, ProductoNuevo) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!ProductoNuevo) {
                res.status(200).send({ message: "No fue posible realizar el registro", statusCode:400 })
            }
            else {
                res.status(200).send({
                    status: 'Producto creado',
                    producto: ProductoNuevo,
                    statusCode:200
                })
            }
        }

    })
}

function obtenerProducto(req,res){
    Producto.find((err,productosEncontrados)=>{
        /* Producto->Accedemos al modelo de nuestra BD para buscar*/
        /* Metodo para buscar dentro de la BD  */
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!productosEncontrados) {
                res.status(200).send({ message: "No fue posible encontrar los registros" })
            }
            else {
                res.status(200).send({
                    status: 'Productos Encontrados',
                    producto: productosEncontrados
                })
            }
        }

    })
}

function actualizarProducto(req,res){
    var productoId= req.params.id;
    /* Indico que uno de mis parametros para actualizar va a ser el ID */
    var nuevosDatosProducto= req.body;
    /* Creamos una variable donde se va a recibir los datos nuevos */

    /* Metodo que me permite encontrar un producto por medio de un Id y lo actualizar a los nuevos datos ingresados, como parametros necesitamos el id del producto y los nuevos datos a cargar */
    Producto.findByIdAndUpdate(productoId, nuevosDatosProducto,(err,productoActualizado)=>{
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!productoActualizado) {
                res.status(200).send({ message: "No fue posible actualizar" })
            }
            else {
                res.status(200).send({
                    status: 'Producto actualizado correctamente',
                    producto: productoActualizado
                })
            }
        }


    })

}

function eliminarProducto(req,res){
    var productoId= req.params.id;
    /* Obtenemos el ID del producto a eliminar */
    /* Este metodo me permite encontrar el id buscado y elimina su registro */
    Producto.findByIdAndDelete(productoId, (err, ProductoEliminado)=>{
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!ProductoEliminado) {
                res.status(200).send({ message: "No fue posible eliminar el producto" })
            }
            else {
                res.status(200).send({
                    status: 'Producto eliminado correctamente',
                    producto: ProductoEliminado
                    /* Nos muestre el producto que fue eliminado */

                })
            }
        }
    })

}

module.exports={
    crearProducto,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
    /* AQUI LLAMAMOS LAS FUNCIONES PARA EXPORTARLAS Y PODERLAS USAR EN NUESTRAS */
}