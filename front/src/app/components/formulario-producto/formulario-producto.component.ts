import { Component, OnInit } from '@angular/core';
import { producto } from '../../models/producto';
import { productoService } from '../../service/producto.service'

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  public Producto: producto; /* modelo */
  public productosEncontrados: any=[]; /* nuevo arreglo */

  constructor(private service: productoService) {
    this.Producto = new producto();
  }
  ngOnInit(): void {
    this.mostrarProductos();
  }

  FormularioUp() {
    this.service.crearProducto(this.Producto).subscribe((res: any) => {
     
      if (res.statusCode !== 200) {
        alert('Error al crear el producto');
      } else {
        alert("Usuario creado correctamente")
      }
    });
  }

  mostrarProductos() {
    this.service.obtenerProducto().subscribe( /* Nos suscribimos al servicio donde esta obtenerProducto */
      (response: any) => { /* La respuesta puede ser cualquiera */
        this.productosEncontrados = response.producto;  /* Contador for nos muestra como respuesta cada producto */
      },
      (error) => {
        var errormensaje = <any>error; /* En caso de error nos arroje cualquier tipo de dato */
        if (errormensaje != null) { /* Si el error es diferente a null que nos lo muestre en la consola */
          console.log(error);
        }
      }
    );
  }

   // Consumo Servicio actualizarTarea con el método editarTarea
   editarProducto(producto){ /* indicamos como parametro el producto recibido */
    this.service.actualizarProducto(producto._id, producto).subscribe( /* consumimos el servicio de actualizar produto, requerimos el id del producto actualizar y los nuevos datos del producto */
      (response: any) =>{
        if(response.producto){  /* si los datos nuevos han sido actualizados */
          alert('La tarea ha sido actualizada correctamente!!');
          this.mostrarProductos();
        } else {
          alert('No fue posible actualizar la tarea');
        }
      }, error =>{
        if(error != null){ /* si hay un error diferente a null, nos mostraras el error en consola */
          console.log(error);
        }
      }
    );
  }

  eliminarProducto(productoId){ /* Creamos el metodo por el cual adquirimos como parametro principal el id del producto a eliminar */
    this.service.eliminarProducto(productoId).subscribe( /* Nos suscribimos al servicio de nuestra API */
      (response:any)=>{ /* La respuesta puede ser de cualquier tipo */
        if(response.producto){ /* La respuesta del modelo de la BD si el producto es correctamente eliminado */
          alert('El producto ha sido eliminado correctamente!!');
          this.mostrarProductos();/* Se elimina el producto y el metodo se recarga para que ya no aparezca mas en nuestra vista */
        } else {
          alert('No fue posible eliminar el producto'); /* En caso de que no se elimine */
        }
    }, error =>{
      if(error != null){ /* Si el error es diferente a null que nos muestre el error en la consola del navegador */
        console.log(error);
      }
    });
  }
}
