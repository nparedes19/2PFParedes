import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscribirseService {

  constructor(private http: HttpClient) { }

  agregarSuscripcion(suscripcion:any, id:any){
    const suscripcionEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + id + '/suscripciones';
    return this.http.post(suscripcionEndpoint, suscripcion)
  }

  obtenerSuscripcion(id:any){
    const suscripcionEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + id + '/suscripciones';
    return this.http.get(suscripcionEndpoint)
  }

  deleteSuscripcion(idAlumno:any, idSuscripcion:any){
    const deleteEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + idAlumno + '/suscripciones/' + idSuscripcion;
    return this.http.delete(deleteEndpoint)
  }

  actualizarSuscripcion(idAlumno:any, idSuscripcion:any, suscripciónActualizada:any){
    const actualizarEndpoint = 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/alumnos/' + idAlumno + '/suscripciones/' + idSuscripcion;
    return this.http.put(actualizarEndpoint,suscripciónActualizada)
  }

}
