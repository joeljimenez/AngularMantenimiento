
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Preguntas } from '../../Interfas/Pregunta';
import { MantenimientoService } from '../../Servicio/mantenimiento.service';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import {Observable} from 'rxjs';


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

    public Pregun: Preguntas = {
        Correcta: 0,
        Opciones: {
            A: {
                AR : '',
                indice : 1
            },
            B: {
                AR : '',
                indice : 2
            },
            C: {
                AR : '',
                indice : 3
            },
            D: {
                AR : '',
                indice : 4
            }
        },
        Pregunta: '',
        Dificultad: '' ,
        Fecha: this.fecha(),
        Respondida: false,
        Terminada: false,
        Habilitado: false
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
                  this.Pregun = res;
                console.log(this.Pregun);
             });
          }

          this.forma = new FormGroup({
            'Correcta' : new FormControl ( '' , [Validators.required , Validators.minLength (1) ]),
            'Opciones' : new FormGroup ({
                'A' : new FormGroup({
                  'AR': new FormControl('' , [Validators.required , Validators.minLength(5)] ),
                }),
                'B' : new FormGroup({
                    'AR': new FormControl('' , [Validators.required , Validators.minLength(5)] ),
                  }),
                  'C' : new FormGroup({
                    'AR': new FormControl('' , [Validators.required , Validators.minLength(5)] ),
                  }),
                  'D' : new FormGroup({
                    'AR': new FormControl('' , [Validators.required , Validators.minLength(5)] ),
                  }),
            }),
            'Pregunta' : new FormControl ( '' , [Validators.required , Validators.minLength(10)]),
            'Dificultad' : new FormControl ( '' , [Validators.required ])
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
 this.Pregun.Opciones.A.AR = this.forma.get('Opciones').get('A').get('AR').value;
this.Pregun.Opciones.B.AR = this.forma.get('Opciones').get('B').get('AR').value;
this.Pregun.Opciones.C.AR = this.forma.get('Opciones').get('C').get('AR').value;
this.Pregun.Opciones.D.AR = this.forma.get('Opciones').get('D').get('AR').value;
this.Pregun.Dificultad = this.forma.get('Dificultad').value;
}


}

