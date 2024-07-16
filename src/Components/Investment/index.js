import React from 'react'
import BodyContainer from '../BodyContainer'
import img from "../../Assets/b808ea7dedf (4).png"
import "./styles.css"

function Investment() {
  return (
    <div className='investment-container'>
        <BodyContainer 
        MainStyles = "body-container-three"   
        BodyContainer="bodyContainer investment-text-container"
        title="Why Investment Matters"
        bodyText="Investment matters because it is a strategic and powerful tool that can shape and secure one's financial future. 
        Beyond merely growing money, investments serve as a means to achieve various financial goals, build wealth, and navigate 
        the uncertainties of the future."
        image={img}
        name="Learn More"
        Button="LearnMore"
        alt = "Financial"
        />
        
    </div>
  )
}

export default Investment