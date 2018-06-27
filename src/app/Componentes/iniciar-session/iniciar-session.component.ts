import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MantenimientoService } from '../../Servicio/mantenimiento.service';

@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html'
})
export class IniciarSessionComponent implements OnInit {

  constructor(public control: Router , public ser: MantenimientoService) { }

  ngOnInit() {
  }
  EntrarM() {

this.control.navigate(['/Mantenimiento']);
  }
}
