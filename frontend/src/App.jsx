import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import Checkout from "./pages/Checkout";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  )
}

export default App
