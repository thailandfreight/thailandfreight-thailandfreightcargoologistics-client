const NetworkProvider = () => {
  const BASE_URL = 'http://localhost:5000/api/v1/';

  const SINGLE_TRACKER = (trackerId) =>
    BASE_URL + `products/findone/${trackerId}`;

  return { BASE_URL, SINGLE_TRACKER };
};

export default NetworkProvider;
