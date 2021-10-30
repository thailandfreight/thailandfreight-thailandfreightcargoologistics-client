import AuthsRepository from './AuthRepository';

// LOGIN
const login = async (data) => {
  try {
    const res = await AuthsRepository.login(data);
    return res;
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

const AuthsBloc = {
  login
};

export default AuthsBloc;
