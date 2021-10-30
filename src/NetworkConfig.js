const axios = require('axios');

const NetworkConfig = async (data) => {
  // var token = window.localStorage.getItem('token') || [];

  const headers = {
    // headers: {
    //   'Content-Type': 'application/json',
    //   Authorization: `bearer ${token}`
    // }
  };

  // GET
  if (data.method === 'get') {
    const response = await axios.get(data.path, headers);
    return response;
  }

  // POST
  if (data.method === 'post') {
    // const headers = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `bearer ${token}`
    //   }
    // };
    const response = await axios.post(data.path, data.body, headers);

    return response;
  }
};

export default NetworkConfig;
