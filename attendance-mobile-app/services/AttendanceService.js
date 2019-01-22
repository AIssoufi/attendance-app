import { get } from '../helpers/requestHelper';
class AttendanceService {
  constructor() {
    this.URL = "http://localhost:3000/attendance";
  }

  getAttendance({ username }) {
    if (typeof (username) !== 'string') throw new TypeError('username must be a string');

    return get({
      url: `${this.URL}/?username=${username}`
    })
  }
}

export default new AttendanceService();