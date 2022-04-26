import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/curso';

import { SuscribirseService } from 'src/app/core/services/suscribirse.service';

@Component({
  selector: 'app-suscribirse',
  templateUrl: './suscribirse.component.html',
  styleUrls: ['./suscribirse.component.css']
})
export class SuscribirseComponent implements OnInit {
  titulo="Suscribirse"
  displayedColumns: string[] = ['alumnoId', 'cursos', 'id', 'acciones'];
  constructor(private suscribirseService: SuscribirseService) {}
  datos$!: Observable<any[]>
  datos: any=[]
  suscripciones: Curso[] =[]
  datosSuscripcion!: any
  suscripcionId:any
  ngOnInit(): void {
  }

  formularioContacto: FormGroup = new FormGroup({
    cursos: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    alumnoId: new FormControl ('', [Validators.required]),
  })

  formularioEditar: FormGroup = new FormGroup({
    id: new FormControl ('', [Validators.required]),
    cursos: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    alumnoId: new FormControl ('', [Validators.required]),
  })
  
  submit(){
    let alumno = this.formularioContacto.value
    let id = alumno.alumnoId
    this.suscribirseService.agregarSuscripcion(alumno,id).subscribe(datos => {
      console.log(datos)

    })
    this.suscribirseService.obtenerSuscripcion(id).subscribe(data=>{
      this.datos = data
      console.log(this.datos)
    })
  }

  delete(idAlumno:any,idSuscripcion:any){
    this.suscribirseService.deleteSuscripcion(idAlumno,idSuscripcion).subscribe(data=>{
      console.log(data)
     
    })
  }

  onGetSuscripcionById(suscripcionId:any){
    this.suscripciones=this.datos
    const dato = this.suscripciones.filter((dato) =>{
      return dato.id === suscripcionId
    })
    console.log(dato)
    return dato
  }


  onEditDato(suscripcionId:any){
    const dato =this.onGetSuscripcionById(suscripcionId)
    console.log(dato)
    this.formularioEditar.get('id')?.setValue(dato[0].id)
    this.formularioEditar.get('cursos')?.setValue(dato[0].cursos)
    this.formularioEditar.get('alumnoId')?.setValue(dato[0].alumnoId)
  }
  
  actualizar(){
    let dato = this.formularioEditar.value
    let idAlumno = dato.alumnoId
    let idDato = dato.id
    this.suscribirseService.actualizarSuscripcion(idAlumno, idDato, dato).subscribe(datos => {
      console.log(datos)
      window.location.reload()
    })}
  
}
