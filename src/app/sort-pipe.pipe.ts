import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  standalone: true
})
export class SortPipePipe implements PipeTransform {

  transform(value: string[] | number[], direccion: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if(direccion === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });
    return sorted;
  }
}
