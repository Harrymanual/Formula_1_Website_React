import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Designed for computers, not phones for now, ust trying to get content finished before worrying about polishing.</p>
        <button className="close-button" onClick={handleClose}>X</button>
      </section>
    </div>
  );
};

export default Modal;