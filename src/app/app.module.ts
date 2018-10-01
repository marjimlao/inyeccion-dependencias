import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjemploService } from './servicios/ejemplo.service';
import { OtroEjemploService } from './servicios/otro-ejemplo.service';
import { miFuncionToken } from './tokens/mi-funcion.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // EjemploService
    {
      provide: EjemploService,
      useClass: OtroEjemploService
    },
    {
      provide: 'MiObjeto',
      useValue: { nombre: 'Marcos' }
    },
    {
      // provide: 'MiFuncion',
      provide: miFuncionToken,
      useFactory: () => {
        const time = new Date().getTime();
        if(time % 2 === 0) {
          return 'Time es par: ' + time;
        } else {
          return 'Time es impar: ' + time;
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
