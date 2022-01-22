import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'customDateFormat',
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(date: Date, dateFormat: string): unknown {
    if (date) {
      const localDate = format(date, dateFormat);
      return localDate;
    } else {
      return '';
    }
  }
}
