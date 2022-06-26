import { Pipe, PipeTransform } from '@angular/core';
import { DataMenuItem } from 'src/app/components/menu/menu.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: { [key: string]: any }): DataMenuItem[] {
    if (!value || value.length <= 0 || !arg) {
      return value;
    }

    const keySearched = Object.keys(arg)[0];

    return value.filter(obj => obj[keySearched] === arg[keySearched]);
  }

}
