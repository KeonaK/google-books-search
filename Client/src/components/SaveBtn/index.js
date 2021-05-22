import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <button className="save-btn" {...props} role="button" tabIndex="0">
      Save
    </button>
  );
}

export default SaveBtn;
