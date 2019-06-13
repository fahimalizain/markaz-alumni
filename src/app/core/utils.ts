export default class Utils {
  public static formatDate(d: Date): string {
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  public static asyncSleep(t: number) {
    return new Promise((res, rej) => setTimeout(res, t));
  }
}
