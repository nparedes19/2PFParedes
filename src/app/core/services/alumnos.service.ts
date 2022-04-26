import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient){}

  obtenerAlumnos(): Observable <any>{
    return this.http.get('https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos')
  }

  deleteAlumno(id:any){
    const deleteEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + id;
    return this.http.delete(deleteEndpoint)
  }

  agregarAlumno(alumno:any){
    return this.http.post('https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos', alumno)
  }

  actualizarAlumno(id:any, alumnoActualizado:any){
    const actualizarEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + id;
    return this.http.put(actualizarEndpoint, alumnoActualizado)
  }

  obtenerSuscripcion(id:any){
    const suscripcionEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + id + '/suscripciones';
    return this.http.get(suscripcionEndpoint)
  }

  deleteSuscripcion(idAlumno:any,idSuscripcion:any){
    const suscripcionEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + idAlumno + '/suscripciones/' + idSuscripcion;
    return this.http.delete(suscripcionEndpoint)
  }
}
