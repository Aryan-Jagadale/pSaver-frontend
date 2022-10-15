import React from "react";
import "./CreatePass.scss";
import { AddCircle as Add } from "@mui/icons-material";

const CreatePass = () => {
  return (
    <div className="align">
    <div className="card1">
    
      <h3>Enter your password</h3>

      <form>
        <div className="form__field form_image_wrapper">
          <img
            className="form_image"
            src="https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="passwordImage"
          />
          <label htmlFor="fileInput">
            <Add fontSize="large" color="action" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>

        <div className="form__field">
          <input type="text" className="form__input" pattern=".{6,}" required />
          <span className="icon"></span>
        </div>
      </form>

      <p>Password must be six or more characters</p>
      <button className="updateButton">Create</button>

        </div>

    </div>
  );
};

export default CreatePass;
