import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app.material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule
  ]
})
export class AutenticacionModule { }
