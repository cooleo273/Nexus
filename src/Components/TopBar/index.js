import React from 'react'
import "./styles.css"
import Button from '../Button'
import img from "../../Assets/photo_2024-07-09_23-06-30.jpg"


function TopBar() {
  return (
    <div className='topbar'>
      <img src={img} alt="placeholder"/>
      <p>NEXUS</p>
      <nav>
        <ul>
          
          <li>About Us</li>
          <li>Why Choose Us</li>
          <li>Services</li>
          <li>Contact</li>
          <Button name="Login"/>
        </ul>
      </nav>
      
      
    </div>
  )
}

export default TopBar