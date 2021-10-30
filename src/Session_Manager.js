export default function SessionManager(res) {
  window.localStorage.setItem('username', res.username);
  window.localStorage.setItem('isAdmin', res.isAdmin);
  window.localStorage.setItem('token', res.accessToken);
  window.localStorage.setItem('loggedIn', true);
}
