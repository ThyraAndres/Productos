import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:5288/api/productos';

  constructor(private http: HttpClient) {}

  // Obtener lista de productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Obtiene productos por id
  getProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  addProducto(producto: Producto): Observable<any> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  // Actualizar un producto
  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar un producto
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener las imágenes de un producto
  getImagenes(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:5000/api/productos/${id}/imagenes`
    );
  }

  // Agregar una imagen al producto
  addImagen(id: number, imagen: any): Observable<any> {
    return this.http.post<any>(
      `http://localhost:5000/api/productos/${id}/imagenes`,
      imagen
    );
  }

  // Eliminar una imagen de un producto
  deleteImagen(id: number, imageId: number): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:5000/api/productos/${id}/imagenes/${imageId}`
    );
  }
}
