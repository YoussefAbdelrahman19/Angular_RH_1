import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoegp'
})
export class UsdtoegpPipe implements PipeTransform {

  transform(val:number,exchangeRate:number=18): number {
    return val*exchangeRate;
  }

}
