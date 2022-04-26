import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient){}

  obtenerCursos(): Observable <any>{
    return this.http.get('https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/cursos')
  }
  deleteCursos(id:any){
    const deleteEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/cursos/' + id;
    return this.http.delete(deleteEndpoint)
  }

  agregarCursos(curso:any){
    return this.http.post('https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/cursos', curso)
  }

  actualizarCurso(id:any, cursoActualizado:any){
    const actualizarEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/cursos/' + id;
    return this.http.put(actualizarEndpoint, cursoActualizado)
  }
}
