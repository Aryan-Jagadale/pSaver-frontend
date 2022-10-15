import React from "react";
import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 

          <img
            className="card__thumb"
            src="https://i.imgur.com/sjLMNDM.png"
            alt=""
          />
          <div className="card__header-text">
            <h3 className="card__title">Google Password</h3>
            <span className="card__status">Last Commit :3 hours ago</span>
          </div>
        </div>
        <p className="card__description">
          Your password: <b>sc+av^PsduNhvm(u)</b> 
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
