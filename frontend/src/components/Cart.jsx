import React, { useContext, useEffect } from "react";
import propTypes from 'prop-types';
import Context from "../context/Context";
import CartItem from "./CartItem";
import SignIn from './SignIn'
import SignUp from './SignUp'
import checkout from "../api/checkout";
import getNewCart from "../api/getNewCart";

function Cart() {

  const {userInfo, cartItems, setCartItems, showModal, setShowModal, showSignIn, setShowSignIn, showSignUp} = useContext(Context)

  const getCartTotal = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  const isLogged = () => {
    if (userInfo.length > 0){
      return true
    }else{
      return false;
    } 
  }

  const processCheckout = () => {
    const user = JSON.parse(localStorage.userInfo)
    isLogged() ? (
      cartItems.forEach(item => {
        item.cart = user[0].cart;
        const token = user[0].token;
        const itemData = JSON.stringify(item);
        checkout(token, itemData,);
        clearCart();
        setShowModal(false);
        }),
        getNewCart(user[0].token, user[0].cart)
    ) : setShowSignIn(true);
  }

  return(
    <>
    {showModal ? (
      <div tabIndex="-2" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full h-full">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex p-4 justify-between rounded-t">
                <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Carrinho</h2>
                </div>
                <div>
                  <button 
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" 
                    onClick={() => setShowModal(false)}
                    >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
            </div>
              <section className="pb-4 pt-1 bg-white antialiased dark:bg-gray-900 ">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                  <div className="my-4 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <CartItem />
                    </div>
                    <div className="mx-auto mt-4 max-w-4xl flex-1 space-y-2 lg:mt-2 lg:w-full">
                      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">Resumo</p>
                        <div className="space-y-4">
                          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt className="text-base font-bold text-gray-900 dark:text-white">Total:</dt>
                            <dd className="text-base font-bold text-gray-900 dark:text-white">
                              {getCartTotal().toLocaleString(
                                'pt-br',{
                                  style: 'currency',
                                  currency: 'BRL', }
                                  )}
                            </dd>
                          </dl>
                        </div>
                          <button
                            type="button" 
                            className="flex w-full items-center justify-center rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                            onClick={() => processCheckout()}
                            >Processar Compra
                          </button>
                          <button 
                            type="button" 
                            className="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            onClick={() => clearCart()}
                            >Limpar Carrinho
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </div>
        {showSignIn ? (<SignIn />) : null }
        {showSignUp ? (<SignUp />) : null }
      </div>
  ) : null }
    </>
  );
}

export default Cart;

Cart.propTypes = {
  children: propTypes.any,
}.isRequired;