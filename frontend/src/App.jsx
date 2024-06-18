import React from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Products from './components/Products'
import Cart from './components/Cart'
import Provider from './context/Provider'

function App() {

  return (
    <Provider>
      <Header/>
      <SearchBar/>
      <Cart/>
      <Products/>
      <Footer/>
    </Provider>
  )
}

export default App
