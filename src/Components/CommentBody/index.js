import React from "react";
import CommentModal from "../CommentModal";
import img from "../../Assets/tachina-lee--wjk_SSqCE4-unsplash (1).jpg";
import "./styles.css";

function CommentBody() {
  return (
    <div className="comment-body-container">
      <div className="comment-body-text">
        <h1>What The Customer Say’s</h1>
      </div>
      <div className="comment-body">
        <CommentModal
          comment="Congratulations on launching Nexus! Your investment company is poised to make significant waves in the financial world. 
        Looking forward to seeing how Nexus disrupts the market with innovative strategies and impactful investments!"
          image={img}
          alt="Financial"
          name="John Doe"
          description="Business Man"
        />
        <CommentModal
          comment="Absolutely thrilled about the launch of Nexus! As an investment powerhouse, 
          Nexus is set to redefine the financial landscape with groundbreaking strategies and impactful investments. 
          Excited to witness Nexus's journey and its impact on the market!"
          image={img}
          alt="Financial"
          name="John Doe"
          description="Business Man"
        />
        <CommentModal
          comment="Exciting times ahead with the launch of Nexus! With its visionary approach and commitment to innovation, 
          Nexus is primed to revolutionize the financial industry.
          Cheers to Nexus's promising future!"
          image={img}
          alt="Financial"
          name="John Doe"
          description="Business Man"
        />
      </div>
    </div>
  );
}

export default CommentBody;
