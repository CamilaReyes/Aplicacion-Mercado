
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class productoService {
    apiURL = 'http://localhost:3000/api';
    constructor(private http: HttpClient) {

    }

    crearProducto(productoNuevo) {
        const params = JSON.stringify(productoNuevo);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http.post(
            this.apiURL + '/crear',
            params,
            options
        ).pipe(res => res);
    }

    obtenerProducto() {
        return this.http.get(
            this.apiURL + '/mostrar'
        ).pipe(res => res);
    }

    actualizarProducto(productoId, productoActualizado) { /* Requerimos el id y el producto actualizado de la API */
        let params = JSON.stringify(productoActualizado);
        /* Convertimos la informacion recibida en un JSON */
        let options = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json' })
        };
        /* Le decimos que por la rutas viajara un JSON */

        return this.http.put(
          this.apiURL + '/actualizar/' + productoId, /* Indicamos ruta y id para que sepa cual actualizar */
          params,
          options
        ).pipe(res => res);
      }


      eliminarProducto(productoId){
        let options = {
            headers: new HttpHeaders( { 'Content-Type': 'application/json'} )
        }; /* Indicamos mediante la variable que el tipo de dato a eliminar es un JSON */
        return this.http.delete(  /* Creamos el metodo http delete */
            this.apiURL + '/eliminar/' + productoId , /* Insertamos la ruta + el id del producto a eliminar */
            options
        ).pipe(res => res);
      }

}

