import React from "react";
import { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({children}) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch ] = useState('');
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])


  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    search,
    setSearch,
    cartItems,
    setCartItems,
  };

  return(
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;