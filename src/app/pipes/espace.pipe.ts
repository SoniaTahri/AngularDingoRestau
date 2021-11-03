import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espace'
})
export class EspacePipe implements PipeTransform {

  transform(ch:string): string {
    let result = " ";
    for (let i = 0; i < ch.length; i++) { 
      let inter = ch[i];
      if (ch[i] == " ") {
        inter = '_';
      }     
    result = result + inter;    
  }
   return result;
}
}
