import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
/**
 * Componente body
 *
 * @author william.Chahin
 */
export class BodyComponent implements OnInit {
  mensajeBody!: String;
  tituloBody!: String;
  miLogueo: boolean = false;
  mensajesObservable$!: Observable<String>;
  mensajesDatos!: String;

  /**
   *
   * @param route Proporciona acceso a información sobre una ruta asociada a un componente cargado en un outlet.
   * @param router Servicio de enrutamiento de Angular.
   * @param _comunicacionService Servicio de comunicacion entre padre e hijo
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  /**
   * Ejecuta los componentes angular
   */
  ngOnInit(): void {
    this.mensajeBody = 'Este es el cuerpo de la aplicación';
    this.tituloBody = 'Bienvenido a mi Pagina';
  }
}
