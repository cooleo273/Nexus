import React from 'react'
import "./styles.css"
import Button from '../Button'


function TopBar() {
  return (
    <div className='topbar'>
      <img src="http://placeholders.it/" alt="placeholder"/>
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