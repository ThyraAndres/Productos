import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagenProducto } from '../models/ImagenProducto';

@Injectable({
  providedIn: 'root'
})
export class ImagenProductoService {

  private apiUrl = 'http://localhost:5288/api/imagenProducto';

  constructor(private http: HttpClient) {}

  getImagenes(): Observable<ImagenProducto[]> {
    return this.http.get<ImagenProducto[]>(`${this.apiUrl}`);
  }

  addImagen(imagen: ImagenProducto): Observable<ImagenProducto> {
    return this.http.post<ImagenProducto>(`${this.apiUrl}`, imagen);
  }

  deleteImagen(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
