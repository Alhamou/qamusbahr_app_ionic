import { Pipe, PipeTransform } from '@angular/core';
import { SearchPage } from '../search/search.page';

@Pipe({
  name: 'exampcolor'
})
export class ExampcolorPipe implements PipeTransform {

  constructor ( private word: SearchPage) {}
  transform(value: any, args?: any): any {

    return value.replace(new RegExp('([u0600-u06FF]*(?:' + this.word.word + ')[u0600-u06FF]*)', 'gi'), '<b>$&</b>');

    }

}
