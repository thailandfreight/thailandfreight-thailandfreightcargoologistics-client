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
};

export default NetworkConfig;
