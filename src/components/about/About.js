import React from "react"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about' >
        
        <h1 className="abt">About WG-point</h1>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='WG-point Story' />

            <p data-testid= 'p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          </div>
         
        </div>
      </section>
    </>
  )
}

export default About
