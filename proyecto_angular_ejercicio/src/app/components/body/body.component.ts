import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  productos = [
    { id: 1, producto: "Laptop Lenovo", categoria: "Computadoras", precio: 6500, stock: 5, activo: true },
    { id: 2, producto: "Mouse Logitech", categoria: "Accesorios", precio: 175, stock: 0, activo: true },
    { id: 3, producto: "Teclado Mecánico", categoria: "Accesorios", precio: 450, stock: 8, activo: true },
    { id: 4, producto: "Monitor Samsung 24", categoria: "Monitores", precio: 1850, stock: 2, activo: true },
    { id: 5, producto: "Webcam Logitech", categoria: "Accesorios", precio: 550, stock: 0, activo: false }
  ];

  cantidadTotalProductos = this.productos.length

  nombreProducto = '';

  botonProductos = true;

  accionProductos() {
    this.botonProductos = !this.botonProductos;
  }

  productoSeleccionado: any = null;

  verDetalle(producto: any) {
    this.productoSeleccionado = producto;
  }

  aumentarStock(producto: any) {
    producto.stock++;
    this.productosDisponibles = this.productos.filter(p => p.stock > 0).length;
    this.productosAgotados = this.productos.filter(p => p.stock === 0).length;
  }

  disminuirStock(producto: any) {
    if (producto.stock > 0) {
      producto.stock--;
      this.productosDisponibles = this.productos.filter(p => p.stock > 0).length;
      this.productosAgotados = this.productos.filter(p => p.stock === 0).length;
    }
  }


  productosDisponibles = this.productos.filter(p => p.stock > 0).length;
  productosAgotados = this.productos.filter(p => p.stock === 0).length;
  productosFiltrados = this.productos;

  filtrarProductos () {
    this.productosFiltrados = this.productos.filter(p => p.producto.toLocaleLowerCase().includes(this.nombreProducto.toLowerCase()));
  }

  
}

