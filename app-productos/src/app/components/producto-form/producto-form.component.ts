import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/Producto';
import { ProductoService } from '../../services/producto.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css',
})
export class ProductoFormComponent implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    fechaCreacion: '',
    estado: true,
  };
  isEditMode: boolean = false;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID obtenido de la URL:', id);
    if (id) {
      this.isEditMode = true;
      this.productoService.getProductoPorId(parseInt(id)).subscribe(
        (producto: Producto) => {
          this.producto = producto;
          console.log('Producto cargado:', this.producto);
        },
        (error) => {
          console.error('Error al obtener el producto:', error);
        }
      );
    }
  }

  onSubmit(form: NgForm): void {
    const { nombre, descripcion, precio, fechaCreacion, estado } = form.value;
    console.log('Formulario enviado:', form.value);
    console.log('Descripción enviada:', descripcion);
    if (this.isEditMode) {
      console.log('ID del producto antes de actualizar:', this.producto.id);
      this.productoService
        .updateProducto(this.producto.id, {
          ...this.producto,
          nombre,
          descripcion,
          precio: parseFloat(precio),
          fechaCreacion,
          estado,
        })
        .subscribe(
          (response) => {
            console.log('Producto actualizado correctamente:', response);
            this.router.navigate(['/productos']);
          },
          (error) => {
            console.error('Error al actualizar el producto:', error);
          }
        );
    } else {
      this.isEditMode = false;
      this.producto = {
        id: 0,
        nombre: '',
        descripcion: '',
        precio: 0,
        fechaCreacion: new Date().toISOString().split('T')[0],
        estado: true,
      };
    }
  }
}
