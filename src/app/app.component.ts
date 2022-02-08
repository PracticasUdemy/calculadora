import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación Calculadora';
  resultado: number;

  mostrarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
