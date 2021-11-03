import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'astriex'
})
export class AstriexPipe implements PipeTransform {

  transform(ch: string): any {
    let voyelles = ['a','e','u','i','o','y'];
    let result = " ";
    for (let i = 0; i < ch.length; i++) {
      let inter = ch[i];
     for (let j = 0; j < voyelles.length; j++) {
       if (ch[i] == voyelles[j]) {
         inter = '*';
       }
     }  
     result = result + inter;    
    }
    return result;
  }

}
