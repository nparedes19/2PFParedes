import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './autenticacion/auth.guard';
import { AlumnosComponent } from './feature/components/alumnos/alumnos.component';
import { CursosComponent } from './feature/components/cursos/cursos.component';
import { InicioComponent } from './feature/components/inicio/inicio.component';
import { SuscribirseComponent } from './feature/components/suscribirse/suscribirse.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: '', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'autenticacion', loadChildren: () => import('./autenticacion/autenticacion.module').then(m=>m.AutenticacionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
