import React, { useState} from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import Select from "react-select"
import { locations } from "../../data/Data"
import {BsSearch} from 'react-icons/bs'


const Hero = ({updateLocation}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(selected !== null) {
      updateLocation(selected.value);
    }
  }
  const [selected, setSelected] = useState(null);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  const locationStyle = {
  option: (styles, {isFocused}) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#999999" : null,
      color: "#333333"
    };
  }
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Find your desired apartment ' subtitle='Find Scamfree and Verified properties in Germany' />

          <form onSubmit={handleSubmit} className='flex'> 
            <div className='box'>
              <span>City</span>
              <Select className="city"
                label="Location"
                options={locations}
                styles={locationStyle}
                onChange={handleChange}
              />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' />
            </div>
            
            <button type='submit' className='search' data-testid="button-cl"> 
              <BsSearch/>Search
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
