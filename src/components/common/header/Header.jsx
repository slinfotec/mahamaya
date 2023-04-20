import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />

      <header>
      
    <title>Mahamaya Girls' College, Kandy</title>
    
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
           
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/achievement'>Achievement</Link>
            </li>
            <li>
              <Link to='/history'>History</Link>
            </li>
            
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>Request</div>
          </div>
          <button className='toggle' >
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
