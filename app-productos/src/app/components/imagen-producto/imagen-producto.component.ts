import { Component, OnInit } from '@angular/core';
import { ImagenProducto } from '../../models/ImagenProducto';
import { ImagenProductoService } from '../../services/imagen-producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imagen-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './imagen-producto.component.html',
  styleUrl: './imagen-producto.component.css',
})
export class ImagenProductoComponent implements OnInit {
  imagenes: ImagenProducto[] = [];
  imagen: ImagenProducto = {
    id: 0,
    productoId: 0,
    url: '',
    descripcion: '',
  };

  constructor(private imagenProductoService: ImagenProductoService) {}

  ngOnInit(): void {
    this.getImagenes();
  }

  getImagenes(): void {
    this.imagenProductoService.getImagenes().subscribe((imagenes) => {
      this.imagenes = imagenes;
    });
  }

  eliminarImagen(id: number): void {
    this.imagenProductoService.deleteImagen(id).subscribe(
      () => {
        this.getImagenes();
        console.log('Imagen eliminada exitosamente.');
      },
      (error) => {
        console.error('Error al eliminar la imagen:', error);
      }
    );
  }

  onSubmit(form: NgForm): void {
    this.imagenProductoService.addImagen(this.imagen).subscribe(
      (response) => {
        console.log('Imagen creada exitosamente:', response);
        form.reset(); // Limpia el formulario después de enviar
      },
      (error) => {
        console.error('Error al crear la imagen:', error);
      }
    );
  }
}
