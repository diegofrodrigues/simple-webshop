import React, { useContext } from "react";
import propTypes from 'prop-types';
import Context from "../context/Context";
import CartItem from "./CartItem";
import storeCart from "../api/storeCart";

function Cart() {

  const {cartItems, setCartItems} = useContext(Context)

  const getCartTotal = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  
  const clearCart = () => {
    setCartItems([]);
    };
  
  return(
    <>
    <div id="readProductModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-scroll overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal">
      <div className="relative p-4 w-full h-full">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex p-4 justify-between rounded-t">
              <div className="text-lg text-gray-900 md:text-xl dark:text-white">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Carrinho</h2>
              </div>
              <div>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="readProductModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
          </div>
            <section className="pb-6 bg-white antialiased dark:bg-gray-900 ">
              <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                  <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  {
                    cartItems.map((product) => (<CartItem key={product.id} data={product}/>))}
                  </div>
                  <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
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
                        onClick={()=>storeCart()}
                        >Processar Compra
                      </button>
                      <button 
                        type="button" 
                        className="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={()=>{clearCart()}}
                        >Limpar Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  </>
  );
}

export default Cart;

Cart.propTypes = {
  children: propTypes.any,
}.isRequired;