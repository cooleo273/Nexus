import React from 'react'
import TopBar from '../TopBar/index'
import HeroSection from '../HeroSection/index'
import "./styles.css"
import BodyContainer from '../BodyContainer'
import img from "../../Assets/b808ea7dedf (2).png"

function Header() {
  return (
    <div className='Header-Container'>
      <TopBar/>
      <HeroSection/>
      <div className='svg-container'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#6E8AF5" d="M44.9,-78.1C58.8,-69.7,71.3,-59,76.9,-45.6C82.5,-32.3,81.1,-16.1,77,-2.3C73,11.4,66.2,22.9,58.1,31.9C50,40.9,40.6,47.4,30.7,48.6C20.8,49.9,10.4,45.9,-0.8,47.3C-12,48.7,-24,55.5,-33.6,54.1C-43.2,52.7,-50.5,43,-56.3,32.6C-62.1,22.2,-66.4,11.1,-65.9,0.3C-65.4,-10.5,-60,-21,-55.9,-34.4C-51.8,-47.7,-49,-63.8,-39.9,-75C-30.7,-86.3,-15.4,-92.7,0,-92.8C15.5,-92.9,30.9,-86.6,44.9,-78.1Z" transform="translate(100 100)" />
</svg>
      </div>
      <BodyContainer 
        title="Investing Build Your Portfolio Starting 
With Just 1 Birr"
        bodyText="Invest in stocks, options, and ETFs at your pace and commission-free.
Investing Disclosures"
        image={img}
      />
    </div>
  )
}

export default Header