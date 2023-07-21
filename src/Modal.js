import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Designed for computers, not phones for now, just trying to get content finished before worrying about polishing.</p>
        <p>Thank you for your patience.</p>
        <button className="close-button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;