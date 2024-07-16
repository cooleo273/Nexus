import React from 'react'
import "./styles.css"

function CommentModal(props) {
  return (
    <div className='comment-modal'>
        <div className='text-area'>
        <p>"{props.comment}"</p>
        </div>
        <div className='image-name'>
        <img src={props.image} alt={props.alt}/>
        <div>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        </div>
        </div>

    </div>
  )
}

export default CommentModal