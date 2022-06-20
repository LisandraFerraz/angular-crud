import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGrey]'
})
export class GreyDirective {

  constructor(private ele: ElementRef) { 
    ele.nativeElement.style.background = '#606060'
  }

}
