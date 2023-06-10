import React from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Home from './Home/Home'
import ProductInfo from './ProductInfo'
import Cart from './Cart'

export default function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='item/:id' element = {<ProductInfo/>} />
      <Route path='/cart' element = {<Cart/>}/>
    </Routes>
  </BrowserRouter>
  </>
}
