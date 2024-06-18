import { useContext, useEffect } from 'react'
import propTypes from 'prop-types'
import Loading from './Loading';
import getProducts from '../api/getProducts';
import Context from '../context/Context';

function Products() {

  const {products, setProducts, loading, setLoading, cartItems , setCartItems} = useContext(Context);
  
  const addCartItem = (product) => {

    const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) => 
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    getProducts().then((res) => {
      setTimeout(() => {
        setProducts(res);
        setLoading(false);
      }, 2000);
    });
  }, []);
 
  return (
    (loading && <Loading /> ) || ( 
    <div className="container dark:bg-gray-900 mx-auto py-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        products.map((product) => (
        <div key={product.id} className="w-full h-full place-content-center mx-auto max-w-md md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div  className="px-5 py-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {product.name}</h5>
                </a>
                <div className="mt-2.5 mb-5">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price.toLocaleString('pt-br',{
                      style: 'currency',
                      currency: 'BRL',})
                    }</span>
                    <button 
                      type="button"
                      className="flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={()=>addCartItem(product)}
                    >
                      <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                      </svg>
                    </button>
                </div>
            </div>
        </div>
        ))
      }
    </div>
    )
  );
}

export default Products

Products.propTypes = {
  data: propTypes.shape({}),
}.isRequired;