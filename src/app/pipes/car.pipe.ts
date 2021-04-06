import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText?filterText.toLocaleLowerCase():"";
    return filterText
    ?value.filter(
      (c:Car) => c.modelYear.toLocaleLowerCase().indexOf(filterText) !==-1
      )
      : value
    }
}
