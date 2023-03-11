import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../home/Home"

import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Properties from "../properties/Properties"
import PropertyView from "../propertyview/Propertyview"



const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/properties'   element={<Properties/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/propertyView' element={<PropertyView/>} />
         
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default Pages
