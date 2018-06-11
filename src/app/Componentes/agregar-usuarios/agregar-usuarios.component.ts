import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AdminstradorService } from '../../Servicio/Administrador';
import { Datos } from '../../Interfas/Adminstrador';


@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html'
})
export class AgregarUsuariosComponent implements OnInit {

lista = true;
  public Aministrador: Datos = {
Nombre: '',
Usuario: '',
Materia: '',
Contra: '',
};
public  ad:Datos[] = [];
public contraV: string;
  constructor( public control: Router , public servicio: AdminstradorService) {
 /* this.servicio.GetPregunta('-LDDa_gD0NZdsvLhrbWt').subscribe(res => {
      console.log(res);
    });*/
   }

  ngOnInit() {
     this.servicio.traerTodos().subscribe( res => {
      this.ad = res;
      console.log(this.ad);
    });
  }

  mostrar() {
   this.control.navigate(['/AgregarAdministrador/Editar' , 'Nuevo']);
  }
  Actua(key$: number) {
this.control.navigate(['/AgregarAdministrador/Editar', key$]);
  }

}
