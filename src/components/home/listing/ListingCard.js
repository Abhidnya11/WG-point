import React from "react"
import { list } from "../../data/Data"
import { useNavigate } from "react-router-dom";
import './ListingCard.css';
import {GoVerified} from 'react-icons/go'
import {MdLocationPin} from 'react-icons/md'
import {GiExpand} from 'react-icons/gi'


const RecentCard = ({ location }) => {
  let navigate = useNavigate(); 
  const routeChange = (name, img) =>{ 
    let path = `/propertyView`; 
    navigate(path, { state: { propertyName: name, image: img } });
  }
  return (
    
    <>
      <div className='content grid3 mtop'>
      {list.filter(function (val) {
          return location === null || location === undefined || (location !== null && val.city === location)
        }).map((val, index) => {
          const { cover, category, location, name, price, date, type } = val
          return (
            <div onClick={() => routeChange(name, cover)} className='box shadow' key={index}>
              <div className='img'>
              <div class="container">
              <img src={cover} alt='' />
             <button class="btn"><GiExpand className="expand"/>VR View</button>
             </div>
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span className="rent">{category}</span>
                  <i><GoVerified/></i>
                </div>
                <h3 className="name1">{name}</h3>
                <p className="add">
                  <i><MdLocationPin className="drop"/></i> {location}
                </p>
                <p className="date">Available from: {date}</p>
              </div>
              <div className='button flex'>
                <div>
                <button className='btn3' >{price}</button> <label htmlFor=''>per month</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
