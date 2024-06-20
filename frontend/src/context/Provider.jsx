import React from "react";
import { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({children}) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch ] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [])
  
  const values = {
    products,
    setProducts,
    loading,
    setLoading,
    search,
    setSearch,
    cartItems,
    setCartItems,
    showModal, 
    setShowModal,
    showSignIn, 
    setShowSignIn,
    showSignUp, 
    setShowSignUp,
    userInfo,
    setUserInfo,
  };

  return(
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;