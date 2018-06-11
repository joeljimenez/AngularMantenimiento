import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Interfas/Usuario';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html'
})
export class SeguimientoComponent implements OnInit {

  public Usu: Usuario = {
  Nombre: '',
  Apellido: '',
  AñoCursa: 1,
  CarreraUni: '',
  Cedula: '',
  Edad: '',
  Detalle: {
    DuracionD: '' ,
    Finaliza: '' ,
    InicioJ: '' ,
    Nivel: 0,
    Puntacion: 0,
},
Autenticacion: {
  Usuario: '',
  Contraseña: '',
  ClaveSeg: ''
},
Pregunta: {
  Habilitado: false,
  Terminado: false,
  Pendiente: false,
  KeyP: '',
  Intento: 0,
  },

};

  constructor() {
    console.log();
  }

  ngOnInit() {
  }

}
