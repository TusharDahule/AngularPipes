import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseAndSort'
})
export class ReverseAndSortPipe implements PipeTransform {

  transform(value: any): any {
    const arr=  value.split("");
    var reverse =arr.reverse().join("");
    return reverse;
  }

}
