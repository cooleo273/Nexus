import React from 'react'
import img from '../../Assets/Apple_Logo_1.png'
import img1 from '../../Assets/Ayat real Estate Logo.png'
import img2 from '../../Assets/blueMoon Logo.png'
import img3 from '../../Assets/Chapa Logo.png'
import img4 from '../../Assets/Commercial Bank of Ethiopia Logo.png'
import img5 from '../../Assets/Dangote Logo.png'
import img6 from '../../Assets/Ethiopian Airlines_idMfc9XrwV_3.png'
import img7 from '../../Assets/Moenco Logo.png'
import "./styles.css"

function LogoSlider() {
  return (
    <div className="logos">
    <div className="logos-slide">
      <img src={img}  alt = "Financial"/>
      <img src={img1} alt = "Financial"/>
      <img src={img2} alt = "Financial"/>
      <img src={img3} alt = "Financial"/>
      <img src={img4} alt = "Financial"/>
      <img src={img5} alt = "Financial"/>
      <img src={img6} alt = "Financial"/>
      <img src={img7} alt = "Financial"/>

    </div>
    <div className="logos-slide">
    <img src={img} alt = "Financial"/>
      <img src={img1} alt = "Financial"/>
      <img src={img2} alt = "Financial"/>
      <img src={img3} alt = "Financial"/>
      <img src={img4} alt = "Financial"/>
      <img src={img5} alt = "Financial"/>
      <img src={img6} alt = "Financial"/>
      <img src={img7} alt = "Financial"/>
    </div>
  </div>
  )
}

export default LogoSlider