import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/core/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  titulo = "Inicio"
  sesionActiva!:any
  constructor(
    private router: Router, private auth: AutenticacionService
  ) {this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}') }

  irCursos(){
    this.router.navigate(['cursos'])
  }

  irAlumnos(){
    this.router.navigate(['alumnos'])
  }

  irSuscribirse(){
    this.router.navigate(['suscribirse'])
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['autenticacion','login'])
  }

  ngOnInit(): void {
  }

}
