import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountprice'
})
export class DiscountpricePipe implements PipeTransform {

  transform(value: number,discountVal:number=0): number {

    let div=discountVal/100;
    let discountMul=value*div;
    return value-discountMul;

  }

}
