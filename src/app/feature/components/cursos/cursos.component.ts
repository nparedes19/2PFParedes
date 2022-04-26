import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/curso';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  titulo="Cursos"
  @ViewChild('tabla') table?:  MatTable<any>;
  displayedColumns: string[] = ['id', 'nombre', 'profesor', 'acciones'];
  cursos$!: Observable<Curso[]>
  cursos: Curso[]=[]
  cursosSuscripcion!: any
  cursoId:any
  formularioContacto: FormGroup = new FormGroup({
    nombre: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    profesor: new FormControl ('', [Validators.required]),
  })

  formularioEditar: FormGroup = new FormGroup({
    id: new FormControl ('', [Validators.required]),
    nombre: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    profesor: new FormControl ('', [Validators.required]),
  })
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.cursosSuscripcion = this.cursos$.subscribe((cursos)=>{
      this.cursos=cursos
      console.log(cursos)
    })
    
  }

  delete(id:any){
    this.cursosService.deleteCursos(id).subscribe(data=>{
      console.log(data)
      window.location.reload()
    })
    
  }
 
  submit(){
    let curso = this.formularioContacto.value
    this.cursosService.agregarCursos(curso).subscribe(datos => {
      console.log(datos)
      window.location.reload()
    })
  }

  onGetCursoById(cursoId:any){
    const curso = this.cursos.filter((curso) =>{
      return curso.id === cursoId
    })

    return curso
  }


  onEditCurso(cursoId:any){
    const curso =this.onGetCursoById(cursoId)
    console.log(curso)
    this.formularioEditar.get('id')?.setValue(curso[0].id)
    this.formularioEditar.get('nombre')?.setValue(curso[0].nombre)
    this.formularioEditar.get('profesor')?.setValue(curso[0].profesor)
  }
  
  actualizar(){
    let curso = this.formularioEditar.value
    let idCurso = curso.id
    this.cursosService.actualizarCurso(idCurso,curso).subscribe(datos => {
      console.log(datos)
      window.location.reload()
    })}
  

}
