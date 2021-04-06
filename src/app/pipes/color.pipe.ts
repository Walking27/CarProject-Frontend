import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    filterText?filterText.toLocaleLowerCase():"";
    return filterText
    ?value.filter(
      (c:Color) => c.colorName.toLocaleLowerCase().indexOf(filterText) !==-1
      )
      : value
  }


}
