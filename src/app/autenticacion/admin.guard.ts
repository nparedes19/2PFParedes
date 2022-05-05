import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let sesion =JSON.parse(localStorage.getItem("sesion") || '{}')
      console.log(sesion)
      if(sesion.usuario.rol == 'admin'){
        return true
      }else{
        this.router.navigate(['inicio'])
        return false
      }
    
  }
  
}
