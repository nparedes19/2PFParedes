import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario';
import { AutenticacionService } from 'src/app/core/services/autenticacion.service';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  })

  usuario$!:Observable<Usuario[]>
  usuario: Usuario[]=[]
  usuarioSuscripcion!: any

  constructor(private auth: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
    this.usuario$ = this.auth.obtenerUsuarios();
    this.usuarioSuscripcion = this.usuario$.subscribe((usuario)=>{
      this.usuario=usuario
      console.log(usuario)
    })
  }

  login(){
    const correo = this.formulario.value.correo;
    const contrasena = this.formulario.value.contrasena;
    
    this.auth.login(correo,contrasena).subscribe((data: Usuario[]) =>{
      if(data.length === 1){
        console.log('Usuario logeado exitosamente', data)
        this.auth.establecerSesion(true, data[0])
        this.router.navigate(['inicio'])

      }else{
        console.log('Error de autenticación', data)
        this.auth.establecerSesion(false, data[0])
      }
    })
  }

}



