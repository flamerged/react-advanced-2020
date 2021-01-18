import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(closeModal, 5000);
  }, [closeModal]);

  return <div className="modal">{modalContent}</div>;
};

export default Modal;
