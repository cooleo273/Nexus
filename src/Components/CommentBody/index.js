import React from 'react'
import CommentModal from '../CommentModal'
import img from "../../Assets/b808ea7dedf (2).png"
import "./styles.css"

function CommentBody() {
  return (
    <div className='comment-body-container'>
        <div className='comment-body-text'>
        <h1>What The Customer Say’s</h1>
        </div>
        <div className='comment-body'>
        <CommentModal 
        comment="Congratulations on launching Nexus! Your investment company is poised to make significant waves in the financial world. 
        Looking forward to seeing how Nexus disrupts the market with innovative strategies and impactful investments!"
        image={img}
        alt = "Financial"
        name="John Doe"
        description="Business Man"
        />
        <CommentModal 
        comment="Congratulations on launching Nexus! Your investment company is poised to make significant waves in the financial world. 
        Looking forward to seeing how Nexus disrupts the market with innovative strategies and impactful investments!"
        image={img}
        alt = "Financial"
        name="John Doe"
        description="Business Man"
        />
        <CommentModal 
        comment="Congratulations on launching Nexus! Your investment company is poised to make significant waves in the financial world. 
        Looking forward to seeing how Nexus disrupts the market with innovative strategies and impactful investments!"
        image={img}
        alt = "Financial"
        name="John Doe"
        description="Business Man"
        />
        </div>
    </div>
  )
}

export default CommentBody