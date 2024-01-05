import React, { useContext, useEffect, useRef } from "react";
import "./TemplateModal.css";
import { ModalContext } from "../../context/ModalContext";

const TemplateModal = ({ children }) => {
  const { closeModal } = useContext(ModalContext);
  const dimmedArea = useRef();

  const closeModalByKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const closeModalByClick = (event) => {
    if (event.target === dimmedArea.current) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModalByKeyDown);
    return () => {
      window.removeEventListener("keydown", closeModalByKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <div className="dimmed-area" ref={dimmedArea} onClick={closeModalByClick}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default TemplateModal;
