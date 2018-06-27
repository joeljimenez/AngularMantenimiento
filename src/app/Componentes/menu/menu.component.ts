import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../Servicio/mantenimiento.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
logueado = false;
  constructor(public ser: MantenimientoService , public control: Router) {
  }

  ngOnInit() {
  }
  Entrar() {
    this.logueado = true;
    console.log(this.logueado) ;
  }
  Salir() {
    this.control.navigate(['/Login']);
    this.logueado = false;
    console.log(this.logueado) ;
  }
}
