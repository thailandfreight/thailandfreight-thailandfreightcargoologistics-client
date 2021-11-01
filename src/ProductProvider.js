import React, { useState, useEffect } from 'react';
import TracksRepository from './components/track/TrackRepository';

// CONTEXT
const ProductContext = React.createContext(null);

const ProductProvider = (props) => {
  const [productData, setProductData] = useState([]);
  const [isProduct, setIsProduct] = useState(false);

  const [isAdminStatus, setIsAdminStatus] = useState(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    setIsAdminStatus(isAdmin);
  }, []);

  const singleProduct = async (trackerId) => {
    try {
      const res = await TracksRepository.singleProduct(trackerId);
      const result = await res.data;
      result.trackerId === trackerId && setIsProduct(true);
      setProductData(result);
    } catch (err) {
      alert('Invalid track ID: ' + trackerId);
    }
  };

  return (
    <ProductContext.Provider
      value={{ singleProduct, productData, isProduct, isAdminStatus }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
