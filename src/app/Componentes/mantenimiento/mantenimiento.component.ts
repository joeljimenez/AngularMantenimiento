import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { MantenimientoService } from '../../Servicio/mantenimiento.service';
import { Preguntas } from '../../Interfas/Pregunta';




@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html'
})
export class MantenimientoComponent implements OnInit {
pre: Preguntas[] = [];

termino: any;
  constructor( public control: Router , public servicio: MantenimientoService ) {
servicio.getPreguntas().subscribe(res => {
this.pre = res;
console.log(this.pre);
});

   }

  ngOnInit() {
  }
  Nuevo(i: number) {
    this.control.navigate(['/Mantenimiento/AgregarPregunta', i]);
  }
  nuevaPr() {
    this.control.navigate(['/Mantenimiento/AgregarPregunta' , 'Nuevo']);
  }
  Eliminar(id: string) {
this.servicio.Eliminar(id).subscribe(res => {
  console.log(res);
  if ( res ) {
    console.error(res);
  } else {
    delete this.pre[id];
  }
});
  }

  Buscar(termino: string) {
this.servicio.search(termino).subscribe(res => {
  console.log(res);

  console.log(termino);
});
  }
}
