import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'llave',
  pure: false
})
export class LlavePipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for(let key in value){
      keys.push(key);
    }
    return keys;
  }

}
