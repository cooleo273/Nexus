import React from 'react'
import Button from '../Button'
import "./styles.css"

const BodyContainer = (props)=>{
    return(
        <div className="body-container">
            <div className="text-container">
            <h1>{props.title}</h1>
            <p>{props.bodyText}</p>
            <Button name="Learn More"/>
            </div>
            <div className="image-container">
                <img src={props.image} alt={props.imageAlt}/>
            </div>
            
        </div>
    )
 
}

export default BodyContainer