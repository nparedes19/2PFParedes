import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return value.apellido +" "+value.nombre 
  }

}
