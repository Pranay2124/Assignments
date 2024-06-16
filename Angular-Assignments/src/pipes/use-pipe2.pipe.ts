import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usePipe2',
  standalone: true
})
export class UsePipe2Pipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.brand.toLowerCase().includes(searchText);
    });
  }

}
