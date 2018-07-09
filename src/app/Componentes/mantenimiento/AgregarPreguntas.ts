
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Preguntas } from '../../Interfas/Pregunta';
import { MantenimientoService } from '../../Servicio/mantenimiento.service';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
    selector: 'app-Agregar',
    templateUrl: './AgregarPregunta.html'
})
export class AgregarComponent implements OnInit {
    pa: any;
    cor = false;
    Guar = false;
    Guar1 = false;
    forma: FormGroup; /*para validar los input*/
     vacio = false;
    public Pregun: Preguntas = {
        IdPregunta: '',
        Pregunta: '',
        Correcta: 1,
        OpcionA: '',
        OpcionB: '',
        OpcionC: '',
        Fecha: new Date(),
        Dificultad: 1,
        FechaA: new Date()
         };

    constructor( public parametro: ActivatedRoute , public servicio: MantenimientoService, public control: Router) {
        this.parametro.params.subscribe(para => {
this.pa = para['id'];
            console.log(this.pa);
          });
          if (this.pa === 'Nuevo' ) {
              this.Pregun.Fecha = this.fecha();
              this.Guar = false;
          } else {
              this.Guar = true;
              this.servicio.getPregunta(this.pa).subscribe(res => {
                  this.Pregun = res.Mensaje[0];
                console.log(this.Pregun);
             });
          }

          this.forma = new FormGroup({
            'Pregunta' : new FormControl ( '' , [Validators.required , Validators.minLength (1) ]),
            'Correcta' : new FormControl ( '0' , [Validators.required , Validators.minLength (1) ]),
            'OpcionA' : new FormControl ( '' , [Validators.required , Validators.minLength (1) ]),
            'OpcionB' : new FormControl ( '' , [Validators.required , Validators.minLength (1) ]),
            'OpcionC' : new FormControl ( '' , [Validators.required , Validators.minLength (1) ]),
            'Dificultad' : new FormControl ( '0' , [Validators.required , Validators.minLength (1)  ])
        });
                }

    ngOnInit(): void {
    }

 Guardar(id: string) {
    this.ObtenerValores();
     console.log(this.forma);
        console.log();
     if ( this.pa === 'Nuevo') {
        this.Guar1 = true;
this.servicio.Agregar(this.Pregun).subscribe(re => {
    console.log(re);
 setTimeout(() => {
     this.Guar1 = false;
     this.control.navigate(['/Mantenimiento']);
    }, 3000);
});
} else {
    this.Guar1 = true;

        this.servicio.Actualizar(this.Pregun, this.pa).
        subscribe(res => {
            console.log(res);
            setTimeout(() => {
                this.Guar1 = false;
                this.control.navigate(['/Mantenimiento']);
            }, 3000);
        });
    }
 
}

fecha() {
const hoy = new Date();

return hoy;
}

/*Validacion para la pregunta*/
ObtenerValores() {
this.Pregun.Pregunta = this.forma.get('Pregunta').value;
this.Pregun.Correcta = this.forma.get('Correcta').value;
 this.Pregun.OpcionA = this.forma.get('OpcionA').value;
this.Pregun.OpcionB = this.forma.get('OpcionB').value;
this.Pregun.OpcionC = this.forma.get('OpcionC').value;
this.Pregun.Dificultad = this.forma.get('Dificultad').value;
}


}

