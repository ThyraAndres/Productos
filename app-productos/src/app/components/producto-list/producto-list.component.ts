import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css',
})
/**
 * @author william.chahin
 */
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductos();
  }

  // Obtener la lista de productos
  getProductos(): void {
    this.productoService.getProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  // Navega al formulario de buscar producto
  getBuscarProducto(): void {
    // Cambia a la ruta para buscar un producto por ID
    this.router.navigate(['/producto-buscar']);
  }

  // Navega a la lista de imágenes de productos
  mostrarImagenes(): void {
    this.router.navigate(['/producto-imagenes']);
  }

  // Navegar al formulario para crear un producto
  crearProducto(): void {
    this.router.navigate(['/producto-form']);
  }

  // Editar un producto
  editarProducto(id: number): void {
    this.router.navigate([`/producto-form/${id}`]);
  }

  // Eliminar un producto
  eliminarProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.getProductos();
    });
  }
}
