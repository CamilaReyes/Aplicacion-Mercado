import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {productoService} from './service/producto.service';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [productoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
