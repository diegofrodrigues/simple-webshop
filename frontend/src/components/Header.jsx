import React, { useContext, useState } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

function Header(){

  const {cartItems} = useContext(Context)
  
  return(  
    <nav className="sticky top-0 z-20 bg-white border-b-2 border-red-500 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.svg" className="h-8 md:h12 lg:h-14" alt="Simple Webshop Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Simple Webshop</span>
      </a>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="mx-3 relative inline-flex items-center p-1 text-sm font-medium text-center text-gray-800 dark:text-white  rounded-lg hover:ring-4 hover:ring-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800" 
          id="readProductButton" 
          data-modal-target="readProductModal" 
          data-modal-toggle="readProductModal"
        >
          <svg className="w-8 h-8 text-gray-800 dark:text-white "  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
          <span className="sr-only" >Cart</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartItems.length}</div>
        </button>

        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg bg-gray-200 dark:bg-gray-700 md:hidden hover:bg-gray-100 focus:outline-none hover:ring-red-500 focus:ring-4 focus:ring-red-500 dark:focus:ring-red-600 dark:text-red-400" aria-controls="navbar-user" aria-expanded="false">
          <span className="sr-only ">Main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        
        
      </div>
      <div className="items-center dark:text-white justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="hover:text-red-600">
            <Link
              to="/"
            >
            Home
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="/register"
            >
              Registrar
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="/checkout"
            >
              Finalizar
            </Link>
          </li>
          
         
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Header;