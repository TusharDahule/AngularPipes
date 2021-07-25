import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName:any): any {
    return value.sort(
      (a,b)=>{
        if(a[propName] > b[propName]){
          return 1;
        }else{
          return -1;
        }
      }
    );
  }

}
