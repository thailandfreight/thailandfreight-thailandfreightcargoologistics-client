import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from './ProductProvider';
import App from './App';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);
