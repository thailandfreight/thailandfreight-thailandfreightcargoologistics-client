const NetworkProvider = () => {
  const BASE_URL = 'http://localhost:5000/api/v1/';

  const LOGIN_URL = BASE_URL + 'auth/login';

  const SINGLE_TRACKER = (productId) =>
    BASE_URL + `products/findone/${productId}`;

  const UPDATE_TRACKER = (trackerId) =>
    BASE_URL + `products/update/${trackerId}`;

  return { BASE_URL, LOGIN_URL, SINGLE_TRACKER, UPDATE_TRACKER };
};

export default NetworkProvider;
