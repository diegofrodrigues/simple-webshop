import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import signOut from "../api/signOut";

function Header(){

  const {cartItems, setShowModal, userInfo, setUserInfo} = useContext(Context);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  const getTotalItems = () => {
    return cartItems.reduce((total, product) => total + product.quantity, 0);
  };

  const user = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : [];

  return(
    <>  
      <nav className="sticky top-0 z-20 bg-white border-b-2 border-red-500 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-8 md:h12 lg:h-14" alt="Simple Webshop Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Simple Webshop</span>
        </a>
        
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="mx-3 relative inline-flex items-center p-1 text-sm font-medium text-center text-gray-800 dark:text-white  rounded-lg hover:ring-4 hover:ring-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800" 
            onClick={() => setShowModal(true)}
          >
            <svg className="w-8 h-8 text-gray-800 dark:text-white "  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>
            <span className="sr-only" >Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{getTotalItems()}</div>
          </button>
          <button 
            type="button" 
            className="flex p-2 text-sm text-white bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-600" 
            onClick={() => {
              signOut(user[0].token); 
              setUserInfo([]); 
            }}
          >Sair
          </button>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Header;