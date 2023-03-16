import React, { useState } from "react"
import "../home/listing/Listing.css"
import { useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import './Propertyview.css'

import {GoVerified} from 'react-icons/go'





const Propertyview = () => {
  const {state} = useLocation();
  const { propertyName, image, date } = state;

  const [language, setLanguage] = useState("en");
    const onChange = (option) => {
      setLanguage(option.target.value);
      i18n.changeLanguage(option.target.value);
    }
    const { t, i18n } = useTranslation();
  
  
return (
  <>
    <section className='properties-out mb'>
      <div className='container property'>
        <div className='img'>
          <img src={image} alt='' />
        </div>

        <div className="text1">
          <h2>{propertyName} <i className="verify"><GoVerified/></i></h2>
          <p className="date">Available from:{date}</p>
          <div className="pt">
              <select className="language-dropdown"  onChange={onChange} value={language}>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
        </div>
        <div className="info">
        <p>{t(`${propertyName}.para1`)}</p>
            <p>{t(`${propertyName}.para2`)}</p>
            <p>{t(`${propertyName}.para3`)}</p>
          </div>
          
      </div>
    </section>
  </>
)
}

export default Propertyview