import { get } from '../helpers/requestHelper';

class CalendarService {
  constructor() {
    this.URL = "http://localhost:3000/calendar";
  }

  getCalendar() {
    return get({
      url: `${this.URL}/all`
    });
  }
}

export default new CalendarService();