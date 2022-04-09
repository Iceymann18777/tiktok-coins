import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export class Dates {
  static getDate(date) {
    return dayjs(date);
  }

  static getToday() {
    return dayjs();
  }

  static unix(date) {
    return dayjs.unix(date);
  }

  static format(date, args) {
    return date.format(args);
  }
}
