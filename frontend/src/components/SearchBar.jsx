import React, { useState, useContext } from "react";
import Context from '../context/Context';

function SearchBar() {

  const {search, setSearch, products, setProducts} = useContext(Context);
 
  const productsFiltred = (event) => {
    event.preventDefault()
    search.length > 0
    ? setProducts(products.filter(product => product.name.includes(search))) : [];
    };

  return(
    <div className="dark:bg-gray-900">
      <form className=" max-w-lg mx-auto py-4 px-2"
      onSubmit={productsFiltred}
      >
        <div className="flex">
          <div className="relative w-full">
            <input className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-red-500" 
              onChange={event => setSearch(event.target.value)} 
              value={search}
              type="search" 
              placeholder="Pesquisar..." 
              required 
            />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-red-700 rounded-e-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Pesquisar</span>
            </button>
          </div>
          </div>
      </form>
    </div>
  );
}

export default SearchBar