import { post } from '../helpers/requestHelper';
class AuthService {
  constructor() {
    this.URL = "http://localhost:3000/auth";
  }

  signin({ username, password }) {
    if (typeof (username) !== 'string') throw new TypeError('username must be a string');
    if (typeof (password) !== 'string') throw new TypeError('password must be a string');

    return post({
      url: `${this.URL}/signin`,
      body: {
        username,
        password
      }
    });
  }

  login({ username, password }) {
    if (typeof (username) !== 'string') throw new TypeError('username must be a string');
    if (typeof (password) !== 'string') throw new TypeError('password must be a string');

    return post({
      url: `${this.URL}/login`,
      body: {
        username,
        password
      }
    });
  }
}

export default new AuthService();