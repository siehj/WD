
import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.OAUTHDomain,
    clientID: process.env.OAUTHClientId,
    redirectUri: process.env.OAUTHCallback,
    responseType: process.env.OAUTHResponse,
    scope: process.env.OAUTHScope
  });

  login() {
    this.auth0.authorize();
  }
}
