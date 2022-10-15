import React from "react";
import "./DetailView.scss";

const DetailView = () => {
  return (
    <div className="detail-view">
    <div className="card1">
      <div className="card1-image">
        <h2 className="card1-heading">
          Get started
          <small>Let us create your account</small>
        </h2>
      </div>
      <form className="card1-form">
        
        <div className="input">
          <input type="text" className="input-field" required value="1397986"/>
          <label className="input-label">Password</label>
        </div>

        <div className="action">
          <button className="action-button">Edit</button>
          <button className="action-button delete-button">Delete</button>

        </div>
      </form>
      <div className="card1-info">
        <p>
          By signing up you are agreeing to our{" "}
          <a href="/">Terms and Conditions</a>
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default DetailView;
