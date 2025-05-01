import React from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom" 
import { ShoppingCardProvider } from './context/ShoppingCartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCardProvider>
        <App />
      </ShoppingCardProvider>
    </BrowserRouter>
  </React.StrictMode>
)
