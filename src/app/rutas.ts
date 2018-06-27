import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MantenimientoComponent } from './Componentes/mantenimiento/mantenimiento.component';
import { AgregarUsuariosComponent } from './Componentes/agregar-usuarios/agregar-usuarios.component';
import { SeguimientoComponent } from './Componentes/seguimiento/seguimiento.component';
import { AgregarComponent } from './Componentes/mantenimiento/AgregarPreguntas';
import { EditarComponent } from './Componentes/editar/editar.component';
import { InformacionUComponent } from './Componentes/informacion-u/informacion-u.component';
import { IniciarSessionComponent } from './Componentes/iniciar-session/iniciar-session.component';



const routes: Routes = [
    { path: 'Login', component: IniciarSessionComponent },
    { path: 'Mantenimiento', component: MantenimientoComponent },
    { path: 'AgregarAdministrador', component: AgregarUsuariosComponent },
    { path: 'SeguimientoJugador', component: SeguimientoComponent },
    { path : 'Mantenimiento/AgregarPregunta' , component: AgregarComponent},
    { path : 'Mantenimiento/AgregarPregunta/:id' , component: AgregarComponent},
    { path : 'AgregarAdministrador/Editar/:key' , component: EditarComponent},
    { path : 'SeguimientoJugador/VerInfo/:k' , component: InformacionUComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'Login' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: false})],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
