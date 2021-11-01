import React, { useState, useContext } from 'react';
import { ProductContext } from '../../../ProductProvider';
import { useHistory } from 'react-router-dom';
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

    console.log(username, password);
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
  console.log('context', isAdminStatus);
  return (
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
  );
};

export default Login;
