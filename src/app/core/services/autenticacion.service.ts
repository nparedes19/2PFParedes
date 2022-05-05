import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, filter } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  URL_API="https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/"
  sesion:any={
    activa: false,
    usuario:{}
  }

  constructor(private http: HttpClient) { }
  obtenerUsuarios(): Observable <any>{
    return this.http.get<Usuario[]>('https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/'+ "usuario")
  }
  login(correo:string, constrasena:string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/'+ "usuario").pipe(
      map((usuarios:Usuario[])=>{
        return usuarios.filter(u=>u.correo === correo && u.contrasena === constrasena)
      })
    )
  }

  establecerSesion(sesionActiva: boolean, usuario: Usuario){
    this.sesion = {
      activa: sesionActiva,
      usuario: usuario
    }

    localStorage.setItem("sesion", JSON.stringify(this.sesion))
  }

  logout(){
    this.sesion ={
      activa: false,
      usuario: {}
    }
    localStorage.removeItem('sesion')
  }
}
