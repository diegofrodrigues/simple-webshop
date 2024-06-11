import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'
import SearchBar from '../components/SearchBar'
import Cart from '../components/Cart'
import Provider from '../context/Provider'
import React from "react";

const Home = () => {
  
  return (
    <Provider>
      <Header/>
      <SearchBar/>
      <Cart/>
      <Products/>
      <Footer/>
    </Provider>
  );
};

export default Home;