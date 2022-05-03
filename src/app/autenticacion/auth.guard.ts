import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InicioComponent } from '../feature/components/inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let sesion =JSON.parse(localStorage.getItem("sesion") || '{}')
      console.log(sesion)
      if(sesion.activa===true){
        
        return true
      }else{
        this.router.navigate(['autenticacion','login'])
        return false
      }
    
  }
  
}
