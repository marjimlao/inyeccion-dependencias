import { Component, Inject } from '@angular/core';
import { EjemploService } from './servicios/ejemplo.service';
import { miFuncionToken } from './tokens/mi-funcion.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inyeccion-dependencias';

  constructor(
    @Inject('MiObjeto') miObjeto,
    // @Inject('MiFuncion') miFuncion,
    @Inject(miFuncionToken) miFuncion,
    private ejemploService: EjemploService
  ) { 
    console.log('Valor del objeto inyectado: ' + miObjeto.nombre);
    console.log('Valor de la función inyectada: ' + miFuncion);
  }
}
