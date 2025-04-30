import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import { ShoppingCardContext, ShoppingCardProvider } from "./context/ShoppingCartContext"
import { useState } from "react"


function App() {

  // const [cartItems, setCartItems] = useState([])

  
  return (
    <ShoppingCardProvider>
      <Layout>    
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/store" element = {<Store />} />
          <Route path = "/product/:id" element = {<Product />} />
          <Route path = "/cart" element = {<Cart />} />
        </Routes>
      </Layout>
    </ShoppingCardProvider>
          
    
  )
}

export default App
