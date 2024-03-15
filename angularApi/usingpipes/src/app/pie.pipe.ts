import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pie'
})
export class PiePipe implements PipeTransform {

  transform(val: number, ...args: unknown[]): unknown {
    if (val <= 21) {
      return 'this is younger'+val;
    } else {
      return 'this is older' +val;
    }
  }

}
