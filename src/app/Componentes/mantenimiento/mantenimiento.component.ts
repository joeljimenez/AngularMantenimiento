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
dificultad: string= '0';
termino: any;
di: boolean;
  constructor( public control: Router , public servicio: MantenimientoService ) {
servicio.getPreguntas().subscribe(res => {
this.pre = res.Linea;
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
    console.log(id);
this.servicio.Eliminar(id).subscribe(res => {
  this.pre = res.Linea;
  console.log(res);
});
  }

  Buscar() {
this.servicio.search(this.dificultad).subscribe(res => {
console.log(res);
this.pre = res.Linea;

if( this.dificultad == "0" ){
  this.di = false;
} else {
  
  if (this.pre.length == 0) {
  this.di= true;
} else {
this.di = false;
}
}

console.log(this.pre);
console.log(this.dificultad);
});
  }
}
