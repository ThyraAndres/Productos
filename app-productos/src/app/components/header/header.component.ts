import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
/**
 * Componente para el header
 *
 * @author william.chahin
 */
export class HeaderComponent implements OnInit {
  mensajeHeader!: String;
  tituloHeader!: String;
  subtituloHeader!: String;
  botonHeader!: String;
  contactoHeader!: String;
  mostrar: boolean = true;
  mensajePropiedad!: string;

  /**
   * constructor del componente
   *
   * @param router Servicio de enrutamiento de Angular.
   */
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.mensajeHeader = 'Mensaje para comprobar el header';
    this.tituloHeader = 'SIMPLEMENTE LOS MEJORES';
    this.subtituloHeader = 'Razones por Elegirnos';
    this.botonHeader = 'Inicio';
    this.contactoHeader = 'Contactanos';
    this.propiedadInformatix(this.mostrar);
  }

  /**
   * Actualiza el mensaje de propiedad basado en el valor booleano proporcionado.
   *
   * @param mostrar Indica si los personajes son propiedad de Informatix.
   */
  propiedadInformatix(mostrar: boolean) {
    if (mostrar) {
      this.mensajePropiedad = 'Estos personajes son propiedad de informatix';
    } else {
      this.mensajePropiedad = 'No son nuestros personajes';
    }
  }
  /**
   * Alterna el valor de la propiedad mostrar y actualiza el mensaje de propiedad.
   */
  cambiarValor() {
    this.mostrar = !this.mostrar;
    this.propiedadInformatix(this.mostrar);
  }
}
