import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/core/models/alumno';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  @ViewChild('tabla') table?:  MatTable<any>;
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'email', 'acciones'];
  displayedColumnsSuscripciones: string[] = ['idCursos', 'idSuscripcion', 'idAlumno', 'acciones'];
  titulo="Alumnos"
  alumnos$!: Observable<Alumno[]>
  alumnos: Alumno[]=[]
  suscripcion:any=[]
  alumnosSuscripcion!: any
  alumnoId:any
  formularioContacto: FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    apellido: new FormControl ('', [Validators.required]),
    edad: new FormControl ('',[Validators.required]),
    correo: new FormControl ('',[Validators.required,Validators.email])
  })

  formularioEditar: FormGroup = new FormGroup({
    id: new FormControl ('', [Validators.required]),
    name: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    apellido: new FormControl ('', [Validators.required]),
    edad: new FormControl ('',[Validators.required]),
    correo: new FormControl ('',[Validators.required,Validators.email])
  })
  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
    this.alumnosSuscripcion = this.alumnos$.subscribe((alumnos)=>{
      this.alumnos=alumnos
      console.log(alumnos)
    })
    
  }

  delete(id:any){
    this.alumnosService.deleteAlumno(id).subscribe(data=>{
      console.log(data)
      window.location.reload()
    })
    
  }
 
  submit(){
    let alumno = this.formularioContacto.value
    this.alumnosService.agregarAlumno(alumno).subscribe(datos => {
      console.log(datos)
      window.location.reload()
    })
  }

  suscripciones(id:any){
    document.getElementById('tablaDetalles')?.classList.remove('noMostrar')
    this.alumnosService.obtenerSuscripcion(id).subscribe(data=>{
      console.log(data)
      this.suscripcion=data
    })
  }

  deleteSuscripciones(idAlumno:any, idSuscripcion:any){
    this.alumnosService.deleteSuscripcion(idAlumno,idSuscripcion).subscribe(data=>{
      console.log(data)
      window.location.reload()
    })
  }

  onGetAlumnoById(alumnoId:any){
    const alumno = this.alumnos.filter((alumno) =>{
      return alumno.id === alumnoId
    })

    return alumno
  }


  onEditAlumno(alumnoId:any){
    const alumno =this.onGetAlumnoById(alumnoId)
    console.log(alumno)
    this.formularioEditar.get('name')?.setValue(alumno[0].name)
    this.formularioEditar.get('apellido')?.setValue(alumno[0].apellido)
    this.formularioEditar.get('edad')?.setValue(alumno[0].edad)
    this.formularioEditar.get('correo')?.setValue(alumno[0].correo)
    this.formularioEditar.get('id')?.setValue(alumno[0].id)
  }
  
  actualizar(){
    let alumno = this.formularioEditar.value
    let idAlumno = alumno.id
    this.alumnosService.actualizarAlumno(idAlumno,alumno).subscribe(datos => {
      console.log(datos)
      window.location.reload()
    })
  }

}
