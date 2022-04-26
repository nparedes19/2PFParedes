import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLetra]'
})
export class LetraDirective {

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.fontSize="20px"
   }

}
