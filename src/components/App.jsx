import React from 'react'
import { BrowserRouter , Routes , Route , element } from 'react-router-dom'
import Home from './Home/Home'

export default function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
    </Routes>
  </BrowserRouter>
  </>
}
