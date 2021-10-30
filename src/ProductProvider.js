import React, { useState } from 'react';
import TracksRepository from './components/track/TrackRepository';

// CONTEXT
const ProductContext = React.createContext(null);

const ProductProvider = (props) => {
  const [productData, setProductData] = useState([]);
  const [isProduct, setIsProduct] = useState(false);

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
    <ProductContext.Provider value={{ singleProduct, productData, isProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
