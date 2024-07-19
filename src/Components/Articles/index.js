import React from 'react'
import ArticleModal from '../ArticleModal'
import img from "../../Assets/hunters-race-MYbhN8KaaEc-unsplash.jpg"
import "./styles.css"

function Articles() {
  return (
    <div id='articles' className='article-modal-container'>
        <div className='article-title'>
        <h2> Our Latest articles</h2>
        </div>
        <div className='modal-container'>
        <ArticleModal
            title="A Guide to Smart Investing in Turbulent Times"
            description="Investment"
            image ={img}
        />
        <ArticleModal
            title="A Guide to Smart Investing in Turbulent Times"
            description="Investment"
            image ={img}
        />
        <ArticleModal
            title="A Guide to Smart Investing in Turbulent Times"
            description="Investment"
            image ={img}
        />
        </div>
    </div>
  )
}

export default Articles