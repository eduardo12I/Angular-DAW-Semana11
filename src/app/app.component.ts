import { Component } from '@angular/core';
import { Productos } from '../app/productos';
import { ProductoClass } from '../app/producto-class';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Desarrollo Web';  
  listaProductos = Productos;
  productoSeleccionado = ProductoClass;

  compartir() {
    window.alert("Producto compartido");
  }

  verDetalle(prod:ProductoClass): void{
     this.productoSeleccionado = prod;

  }


}
