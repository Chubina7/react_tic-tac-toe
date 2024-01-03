import React from "react";
import "./Btn.css";

function Btn(props) {
  return (
    <button
      className={props.btnStatus === "inactive" ? "inactive-btn" : "btn"}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Btn;
