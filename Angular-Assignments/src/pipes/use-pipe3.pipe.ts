import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usePipe3',
  standalone: true
})
export class UsePipe3Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
