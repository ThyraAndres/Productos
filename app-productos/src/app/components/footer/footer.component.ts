import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
/**
 * Componente footer
 *
 * @author william.chahin
 */
export class FooterComponent implements OnInit{

  mensajeFooter!: String;

  /**
   * Ejecutador de componentes angular
   */
  ngOnInit(): void {
    this.mensajeFooter = "M"; 
  }

}
