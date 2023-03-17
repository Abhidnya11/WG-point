
import React from "react"
import Header from "../src/components/common/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/components/home/Home"

import About from "../src/components/about/About"
import Properties from "../src/components/properties/Properties"
import PropertyView from "../src/components/propertyview/Propertyview"
import "./App.css"


const App = () => {
  
  return (
    <div data-testid ="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/properties'   element={<Properties/>} />
          <Route exact path='/propertyView' element={<PropertyView/>} />
         
        </Routes>
        
      </BrowserRouter>
      </div>
    
  )
}

export default App
