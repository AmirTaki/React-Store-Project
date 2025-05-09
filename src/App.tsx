import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import {useShoppingCardContext } from "./context/ShoppingCartContext"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import Login from "./pages/login/Login"
import { Navigate } from "react-router-dom"

function App() {

  const {isLogin} = useShoppingCardContext()

  
  return (
   
      <Layout>    
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/store" element = {<Store />} />
          <Route path = "/product/:id" element = {<Product />} />
          <Route path = "/login" element = {isLogin ? <Navigate  to="/"/> : <Login />} />
          <Route element= {<PrivateRoute />}>
            <Route path = "/cart" element = {<Cart />} />
          </Route>
        </Routes>
      </Layout>          
    
  )
}

export default App
