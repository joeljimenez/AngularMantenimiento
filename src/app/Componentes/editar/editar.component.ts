import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminstradorService } from '../../Servicio/Administrador';
import { Datos } from '../../Interfas/Adminstrador';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {
  public Aministrador: Datos = {
    Nombre: '',
    Administrador: '',
    Materia: '',
    Contra: '',
    };
    usu = '';
    error:Boolean;
    forma: FormGroup;
    Guar = false;
    Guar1 = false;
    pa: string;
    habilita = true;
    contraV: string;
  constructor(public control: Router, public servicio: AdminstradorService, public parametro: ActivatedRoute) {

    this.parametro.params.subscribe(para => {
      this.pa = para['key'];
    });
                if (this.pa === 'Nuevo' ) {
                  this.Guar = false;
                } else {
                  this.Guar = true;
                  this.servicio.Pregunta(this.pa).subscribe(res => {
                    this.Aministrador = res.Linea[0];
                  this.contraV=  res.Linea[0].Contra;
                   this.habilita = false;
                   });
                /*                      */
                }
                this.forma = new FormGroup({
                  'Nombre' : new FormControl('', [Validators.required, Validators.minLength(5)]),
                  'Administrador' : new FormControl('', [Validators.required, Validators.minLength(5)]),
                  'Materia' : new FormControl('', [Validators.required, Validators.minLength(5)]),
                  'Contra' : new FormControl('', [Validators.required, Validators.minLength(5)]),
                  'contraV' : new FormControl ('')
                });
                this.forma.controls['contraV'].setValidators([
                  Validators.required, this.noIgual.bind(this.forma)
                  ]);
   }

  ngOnInit() {
  }

  Validar() {
    this.servicio.verificar(this.Aministrador.Administrador).subscribe(res => {
      this.usu = res.Mensaje;
      this.error = res.Error;
    });
 
  }

  /*verificar si la contraseña es igual*/
  noIgual(control:FormControl): {[s: string]: boolean} {
   const forma: any = this;
    if( control.value !== forma.controls['Contra'].value){ 
      return{
        noiguales: true
      }
    } else {
      return null;
    }
   }

  volver() {
   this.control.navigate(['/AgregarAdministrador']);
  }

  Registrar() {
    if ( this.pa === 'Nuevo') {
               this.Guar1 = true;
               this.servicio.Agregar(this.Aministrador).subscribe(res => {
            });
          setTimeout(() => {
              this.Guar1 = false;
              this.control.navigate(['/AgregarAdministrador']);
        }, 3000);
     } else {
             this.Guar1 = true;
             this.servicio.Actualizar(this.Aministrador, this.pa).subscribe(res => {

      setTimeout(() => {
             this.Guar1 = false;
             this.control.navigate(['/AgregarAdministrador']);
      }, 3000);
    });
 }
}

}
