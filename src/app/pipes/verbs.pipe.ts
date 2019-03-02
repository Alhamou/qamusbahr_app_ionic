import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verbs'
})
export class VerbsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      const newData = value.replace(
        // tslint:disable-next-line:max-line-length
        /^habe |^hast |^hat |^haben |^habt |^hatte |^hattest |^hatten |^hattet |^werde |^wirst |^wird |^werden |^werdet |^hätte |^hättest |^hätte |^hätten |^hättet |^habest |^habet |^bin |^bist |^ist |^sind |^seid |^war |^warst |^waren |^wart |^sei |^seiest |^seien |^seiet |^würde |^würdest |^würden |^würdet /gi,
        '<b>$&</b>'
      );
      return newData;
    } catch (err) {}
  }

}
