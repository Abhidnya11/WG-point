import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

import {BsFillPersonFill} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'


const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
           <h1>WG-point<MdLocationPin className="drop"/></h1>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            
            <button className='btn1'>
              <i><BsFillPersonFill className="login"/> </i> Login
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
