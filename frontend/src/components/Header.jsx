import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import signOut from "../api/signOut";

function Header(){

  const {cartItems, setShowModal, userInfo, setUserInfo} = useContext(Context);
  const [userMenu, setUserMenu] = useState(false);

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

  const user = JSON.parse(localStorage.userInfo);

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
            id="cartButton" 
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
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-600" 
            onClick={() => !userMenu ? setUserMenu(true) : setUserMenu(false)} 
          >
            <span className="sr-only">User menu</span>
            <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
          </button>
          { userMenu ? (
            <div className="absolute right-0 top-14 z-50 my-4 text-base list-none bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white"></span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400"></span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={() => {signOut(user[0].token); setUserInfo([]); setUserMenu(false);}}
                  >Sair</a>
                </li>
              </ul>
            </div>
          ) : null }
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg bg-gray-200 dark:bg-gray-700 md:hidden hover:bg-gray-100 focus:outline-none hover:ring-red-500 focus:ring-4 focus:ring-red-500 dark:focus:ring-red-600 dark:text-red-400" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only ">Main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Header;