import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparate'
})
export class CommaSeparatePipe implements PipeTransform {

  transform(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1, $2');
  }

}
