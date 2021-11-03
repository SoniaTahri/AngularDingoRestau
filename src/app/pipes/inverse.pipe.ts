import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse'
})
export class InversePipe implements PipeTransform {

  transform(ch: any): any {

    let result=" "; 
    for (let i = 0; i < ch.length; i++) {
        result = ch[i]+result;      
    }
    return result;
  }

}
