import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { AlumnosComponent } from "./alumnos.component";

describe("AlumnosComponent", () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  });

  it('Los alumnos se estan cargando correctamente',
    inject([HttpClient], () => {
      const fixture = TestBed.createComponent(AlumnosComponent)
      const controlador = fixture.componentInstance
      fixture.detectChanges()
  
      expect(controlador.alumnos).toBeTruthy()
    }),
   )

   it('La información se muestra en pantalla',
      ()=>{
        const fixture = TestBed.createComponent(AlumnosComponent)
        const vista = fixture.nativeElement as HTMLElement
        fixture.detectChanges()

        setTimeout(()=>{
          expect(vista.querySelector('td')).toBeTruthy()
        },5000)

      })
})