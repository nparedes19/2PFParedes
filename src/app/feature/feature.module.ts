import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SuscribirseComponent } from './components/suscribirse/suscribirse.component';
import { AppMaterialModule } from '../shared/app.material.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    InicioComponent,
    AlumnosComponent,
    CursosComponent,
    SuscribirseComponent,
    NavbarComponent,


  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FeatureRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FeatureModule { }
