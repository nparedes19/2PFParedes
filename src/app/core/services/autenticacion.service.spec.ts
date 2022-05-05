import { inject, TestBed } from '@angular/core/testing';
import { AutenticacionService } from "./autenticacion.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Usuario } from '../models/usuario';


describe("AutenticacionService", () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutenticacionService]
    });
    service = TestBed.inject(AutenticacionService);
  });

  it(
    'El login funciona correctamente',
    inject([HttpTestingController, AutenticacionService],
      (httpMock: HttpTestingController, AutenticacionService: AutenticacionService)=>{
        const mockUsuario: Usuario[] =[{
          nombre: "Favian",
          apellido: "Miller",
          correo: "Meaghan_Ferry@yahoo.com",
          contrasena: "gPqXKFVNizYaPO4",
          rol: "admin",
          id: 1
        }]
        AutenticacionService.login("Meaghan_Ferry@yahoo.com","gPqXKFVNizYaPO4").subscribe((data)=>{
          expect(data[0].id).toEqual(mockUsuario[0].id)
        })
        const req = httpMock.expectOne({
          method: 'GET',
          url: 'https://6262cfe9005a66e1e3adf3dc.mockapi.io/api/v1/usuario'
        })
        req.flush(mockUsuario)
      }
      ))
});
