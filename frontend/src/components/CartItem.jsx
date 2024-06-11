import React, { useContext } from "react";
import propTypes from 'prop-types'
import Context from "../context/Context";

function CartItem() {

  const {cartItems, setCartItems} = useContext(Context)

  const removeCartItem = (product) => {
    
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== product.id));
   
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return(
    <>
      {
        cartItems.map(product => (
      <div key={product.id}  className="mt-2 md:gap-4 lg:flex lg:items-start xl:gap-6">
        <div  className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-6"></div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                  <div className="text-end md:order-4 md:w-32">
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <p className="dark:text-whitew-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">Qnt.: {product.quantity} und</p>
                    </div>
                  </div>
                    <p className="text-base font-bold text-gray-900 dark:text-white">{product.price.toLocaleString(
                      'pt-br',{
                        style: 'currency',
                        currency: 'BRL',
                      })
                    }
                  </p>
                  </div>
                </div>
                <div className="w-full  min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                  <p className="text-base font-medium text-gray-900 hover:underline dark:text-white">{product.name}</p>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      onClick={()=>{removeCartItem(product)}}   
                    >
                      <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      ))
      }
    </>
  );
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;