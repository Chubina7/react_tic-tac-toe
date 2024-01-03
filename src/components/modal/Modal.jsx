import React from "react";
import "./Modal.css";
import Btn from "../btn/Btn";

function Modal({ statusMessage, onRestart }) {
  const closeModalHandler = () => {

  };

  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <h1 className="status-message">{statusMessage}</h1>
        <div className="modal-btn-container">
          <Btn title="Start new game" onClick={onRestart} />
        </div>
      </div>
    </>
  );
}

export default Modal;
