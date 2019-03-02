import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tashkel'
})
export class TashkelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/أ|إ|آ|اً/gi, 'ا')
    .replace(
      /َ|ً|ُ|ِ|ٍ|ْ|ّ|^der |^die |^das |[\\\?\/\!\@\#\$\%\^\&\*\(\)\<\>\{\}\[\]\+\_\-\~\:\;\'\"\´\`\§]/gi,
      '');
  }
}
