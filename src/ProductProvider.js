import React, { useState, useEffect } from 'react';
import Repo from './components/track/TrackRepository';

// CONTEXT
const ProductContext = React.createContext(null);

const ProductProvider = (props) => {
  // useState
  const [doSomething, setDoSomething] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAdminStatus, setIsAdminStatus] = useState(false);

  // useEffect
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    setIsAdminStatus(isAdmin);
  }, []);

  // blocFunc
  const doSomethingBloc = async (params) => {
    try {
      const res = await Repo.updateProduct(params);
      const result = await res.data;
      setDoSomething(result);
    } catch (err) {
      alert('Error occured: ' + err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        doSomethingBloc,
        setDoSomething,
        doSomething,
        isSuccess,
        setIsSuccess,
        isAdminStatus,
        setIsAdminStatus
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
