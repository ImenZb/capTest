import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataLocal'
})
export class DataLocalPipe implements PipeTransform {

  transform(value: string): unknown {
    return new Date(+value*1000).toLocaleDateString();
  }

}
