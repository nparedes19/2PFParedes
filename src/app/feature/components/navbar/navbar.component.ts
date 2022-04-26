import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  titulo = "Inicio"
  constructor(
    private router: Router
  ) { }

  irCursos(){
    this.router.navigate(['cursos'])
  }

  irAlumnos(){
    this.router.navigate(['alumnos'])
  }

  irSuscribirse(){
    this.router.navigate(['suscribirse'])
  }

  ngOnInit(): void {
  }

}
