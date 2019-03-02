import { Pipe, PipeTransform } from '@angular/core';
import { SearchPage } from '../search/search.page';

@Pipe({
  name: 'exampcolorde'
})
export class ExampcolordePipe implements PipeTransform {

  constructor ( private word: SearchPage) {}
  transform(value: any, args?: any): any {
     return value.replace(new RegExp('([a-zA-ZäöüÄÖÜß]*(?:' + this.word.word + ')[a-zA-ZäöüÄÖÜß]*)', 'gi'), '<b>$&</b>');
  }

}
