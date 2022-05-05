import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../autenticacion/admin.guard';
import { AuthGuard } from '../autenticacion/auth.guard';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SuscribirseComponent } from './components/suscribirse/suscribirse.component';


const routes: Routes = [
  {path: 'cursos', component: CursosComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'alumnos', component: AlumnosComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'suscribirse', component: SuscribirseComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }