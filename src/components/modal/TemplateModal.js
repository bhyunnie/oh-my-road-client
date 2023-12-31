import React from "react";
import "./TemplateModal.css";

const TemplateModal = ({ children }) => {
  return (
    <React.Fragment>
      <div className="dimmed-area">
        <div className="modal">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default TemplateModal;
