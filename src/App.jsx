import { useState } from 'react'
import './App.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductListing from './pages/ProductListing'
import AllProducts from './pages/AllProducts'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import PublicRoutes from './components/Routes/PublicRoutes'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} /> 
          <Route path='/all-products' element={<ProtectedRoutes><AllProducts /></ProtectedRoutes>} />
          <Route path='/list-product' element={<ProtectedRoutes><ProductListing /></ProtectedRoutes>} />
          <Route path='/prod-dtl/:id' element={<ProtectedRoutes><ProductDetail /></ProtectedRoutes>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/signup" element={<PublicRoutes><Signup /></PublicRoutes>} />
          <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
