import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      let text,
        result = '';
      for (result of value) {
        if (result['lang_description'].length > 1) {
          text = result['lang_description'];
          break;
        }
      }

      if (text.indexOf('adj.') > -1) {
        result = 'صفـة';
      } else if (text.indexOf('n.') > -1) {
        result = 'اسم علم';
      } else if (text.indexOf('prep.') > -1) {
        result = 'حرف جر';
      } else if (text.indexOf('onjunktion') > -1) {
        result = 'حرف عطف';
      } else if (text.indexOf('adv') > -1) {
        result = 'مضاف اليه';
      } else if (text.indexOf('v.') > -1) {
        result = 'فعـل';
      } else if (text.indexOf('nomen') > -1) {
        result = 'ضمير';
      } else if (text.indexOf('satz') > -1) {
        result = 'جملة مفيدة';
      } else {
        result = 'غير مصنف';
      }
      return result;
    } catch (error) {}

  }

}
