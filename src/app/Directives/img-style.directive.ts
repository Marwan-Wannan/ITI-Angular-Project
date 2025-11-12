import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyle implements OnChanges {
  @Input() border1: string = '30px';
  @Input() border2: string = '0px';

  constructor(private elementRef:ElementRef) { }

  ngOnChanges(): void {
    this.elementRef.nativeElement.style.borderRadius=this.border2;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.borderRadius=this.border1;
    this.elementRef.nativeElement.style.transition='all 0.5s ease-in-out';
    this.elementRef.nativeElement.style.boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.borderRadius=this.border2;
    this.elementRef.nativeElement.style.transition='all 0.5s ease-in-out';
    this.elementRef.nativeElement.style.boxShadow='none';
  }
}
