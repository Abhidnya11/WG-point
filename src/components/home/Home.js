import React, { useState } from "react"

import Hero from "./hero/Hero"
import Listing from "./listing/Listing"


const Home = () => {
  
  const [location, setLocation] = useState(null);
  const updateLocation = (newLocation) => {
    console.log(newLocation)
    setLocation(newLocation);
    
  }
  return (
    <>
    <Hero updateLocation={updateLocation} />
    <Listing location={location}/>
    </>
  )
}

export default Home
