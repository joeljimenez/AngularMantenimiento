import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminstradorService } from '../../Servicio/Administrador';
import { Datos } from '../../Interfas/Adminstrador';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {
  public Aministrador: Datos = {
    Nombre: '',
    Usuario: '',
    Materia: '',
    Contra: '',
    };
    Guar = false;
    Guar1 = false;
    pa: string;
    habilita = true;
     contraV: string;
  constructor(public control: Router, public servicio: AdminstradorService, public parametro: ActivatedRoute) {

    this.parametro.params.subscribe(para => {
      this.pa = para['key'];
                  console.log(this.pa);
                });
                if (this.pa === 'Nuevo' ) {
                  this.Guar = false;
                } else {
                    this.Guar = true;
                    this.servicio.Pregunta(this.pa).subscribe(res => {
                        this.Aministrador = res;
                     this.habilita = false;
                   });
                }
   }

  ngOnInit() {
  }

  volver() {
   this.control.navigate(['/AgregarAdministrador']);
  }

  Registrar() {
        if( this.pa === 'nuevo') {
          this.Guar1 = true;
          setTimeout(() => {
            this.Guar1 = false;
            this.servicio.Agregar(this.Aministrador).subscribe(res => {
            console.log(res);
            });
            this.control.navigate(['/AgregarAdministrador']);
        }, 3000);
     }
else {
  this.Guar1 = true;
    this.servicio.Actualizar(this.Aministrador, this.pa).subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.Guar1 = false;
        this.control.navigate(['/AgregarAdministrador']);
      }, 3000);
    });
 }
}

}
