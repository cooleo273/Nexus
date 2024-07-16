import React from 'react'
import "./styles.css"

function Button(props) {
  return (
    <div>
        <button type="button" >{props.name}</button>
    </div>
  )
}

export default Button