import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usePipe',
  standalone: true
})
export class UsePipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.fname.toLowerCase().includes(searchText)||item.lname.toLowerCase().includes(searchText);
    });
  }

}
