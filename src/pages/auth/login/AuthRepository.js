import NetworkConfig from '../../../NetworkConfig';
import NetworkProvider from '../../../NetworkProvider';

const login = async (data) => {
  try {
    const res = await NetworkConfig({
      path: NetworkProvider().LOGIN_URL,
      body: data,
      method: 'post'
    });
    return res;
  } catch (e) {
    throw e;
  }
};

const AuthsRepository = {
  login
};

export default AuthsRepository;
