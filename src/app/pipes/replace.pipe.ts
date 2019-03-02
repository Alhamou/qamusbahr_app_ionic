import { Pipe, PipeTransform } from '@angular/core';
import { SearchPage } from '../search/search.page';

@Pipe({
  name: 'replace'
})

export class ReplacePipe implements PipeTransform {

  constructor ( private home: SearchPage) {}

  transform(value: string, args?: any ) {
    return value.replace(new RegExp('^' + this.home.case + '[\u0600-\u06FFäöüÄÖÜß]*', 'gi'), '<b>$&</b>');

  }

}
