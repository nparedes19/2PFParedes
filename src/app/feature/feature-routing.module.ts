import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SuscribirseComponent } from './components/suscribirse/suscribirse.component';


const routes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'suscribirse', component: SuscribirseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }