import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import { useLocation } from "react-router-dom"




const Propertyview = () => {
    const {state} = useLocation();
    const { propertyName, image } = state; // Read values passed on state
    
  return (
    <>
    <h1>{propertyName}</h1>
    <h1>{image}</h1>
      <section className='properties-out mb'>
        <Back name='Properties' title='Properties Grid - Our Properties'/>
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Propertyview