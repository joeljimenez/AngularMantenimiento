import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule, FormControlName} from '@angular/forms';
import { AppComponent } from './app.component';
import { MantenimientoComponent } from './Componentes/mantenimiento/mantenimiento.component';
import { IniciarSessionComponent } from './Componentes/iniciar-session/iniciar-session.component';
import { AgregarUsuariosComponent } from './Componentes/agregar-usuarios/agregar-usuarios.component';
import { LlavePipe } from './Pipes/llave.pipe';
import { SeguimientoComponent } from './Componentes/seguimiento/seguimiento.component';
import { AgregarComponent } from './Componentes/mantenimiento/AgregarPreguntas';
import { HttpClientModule } from '@angular/common/http';

/*Ruta*/
import {FeatureRoutingModule } from './rutas';
import { MenuComponent } from './Componentes/menu/menu.component';
/*servicios*/
import { AdminstradorService } from './Servicio/Administrador';

import { MantenimientoService } from './Servicio/mantenimiento.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditarComponent } from './Componentes/editar/editar.component';
import { InformacionUComponent } from './Componentes/informacion-u/informacion-u.component';





@NgModule({
  declarations: [
    AppComponent,
    MantenimientoComponent,
    IniciarSessionComponent,
    AgregarUsuariosComponent,
    LlavePipe,
    SeguimientoComponent,
    MenuComponent,
    AgregarComponent,
    EditarComponent,
    InformacionUComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [MantenimientoService , AdminstradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
