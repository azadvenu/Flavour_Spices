import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import Dishes from '../Pages/Dishes/Dishes'
import Booking from '../Pages/Booking/Booking'
import About from '../Pages/About/About'
import NotFound from '../Pages/NotFound/NotFound'
import Signin from '../Pages/Signin/Signin'
import Register from '../Pages/Register/Register'
function LayoutRoutes() {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Flavour_Spices' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/services' element={<Booking/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default LayoutRoutes
