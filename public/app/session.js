const settings = {
  set: function (baseUrl, token) {
    sessionStorage.setItem('baseUrl', baseUrl);
    sessionStorage.setItem('token', token);
  },
  get: function () {
    return {
      baseUrl: sessionStorage.getItem('baseUrl'),
      token: sessionStorage.getItem('token')
    }
  },
  remove: function () {
    sessionStorage.removeItem('baseUrl');
    sessionStorage.removeItem('token');
  }
}