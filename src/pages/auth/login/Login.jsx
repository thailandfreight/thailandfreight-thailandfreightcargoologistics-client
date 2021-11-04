import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../../ProductProvider';
import { useHistory, Redirect } from 'react-router-dom';
import AuthsBloc from './AuthBloc';
import SessionManager from '../../../Session_Manager';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isStatus, setIsStatus] = useState(false);

  const { isAdminStatus, setIsAdminStatus } = useContext(ProductContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password
    };
    try {
      setIsStatus(true);
      const isLogin = await AuthsBloc.login(data);
      if (isLogin) {
        setIsStatus(false);
        const res = isLogin.data;
        setIsAdminStatus(true);
        SessionManager(res);

        if (localStorage.getItem('isAdmin') === 'true') {
          history.push('/dashboard', res);
        }
      }
    } catch (err) {
      setIsStatus(false);
      alert('Incorrect uername or password', err);
    }
  };

  useEffect(() => {
    const admiin = () => {
      try {
        // console.log('contextxx', isAdminStatus);
        if (isAdminStatus) {
          <Redirect to="/" />;
        }
      } catch (err) {
      } finally {
        // hhh.push('/dashboard');
      }
    };

    admiin();
  }, []);

  // {
  //   isAdminStatus && <Redirect to="/dashboard" />;
  // }

  // const makeRequest = () => {
  // if (isAdminStatus) {
  //   console.log('contextxx', isAdminStatus);
  //   // history.push('/dashboard');
  //   return <Redirect to="/dashboard" />;
  // }
  // return makeRequest;
  // };

  return (
    <>
      <div
        style={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <input
          style={{ padding: 10, marginBottom: 20 }}
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ padding: 10, marginBottom: 20 }}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: 10,
            width: 100,
            background: '#0a0606',
            color: '#fff'
          }}
        >
          {isStatus ? 'Loading..' : 'Login'}
        </button>
      </div>
    </>
  );
};

export default Login;
