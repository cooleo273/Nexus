import React from 'react'
import "./styles.css"

function ArticleModal(props) {
  return (
    <div className='article-modal'>
        <img src={props.image} alt={props.alt}/>
        <p>{props.description}</p>
        <h4>{props.title}</h4>
    </div>
  )
}

export default ArticleModal