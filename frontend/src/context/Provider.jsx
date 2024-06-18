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
  // const [userInfos, setUserInfos] = useState(localStorage.getItem('userInfos') ? JSON.parse(localStorage.getItem('userInfos')) : [])
  
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
    // userInfos,
    // setUserInfos,
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