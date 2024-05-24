import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Designed for computers, not phones. The website is made with react and leverages no other frameworks.</p>
        <button className="close-button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;