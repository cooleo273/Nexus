import React from 'react'
import Button from '../Button'
import "./styles.css"

const BodyContainer = (props)=>{
    return(
        <div className={props.MainStyles}>

            <div className={props.BodyContainer}>
            <h3>{props.subtitle}</h3>
            <h1>{props.title}</h1>
            <p>{props.bodyText}</p>
            {props.displayButton ?? <button className={props.Button} >{props.name}</button>}
            </div>
            <div className="image-container">
                <img src={props.image} alt={props.imageAlt}/>
            </div>
            
        </div>
    )
 
}

export default BodyContainer