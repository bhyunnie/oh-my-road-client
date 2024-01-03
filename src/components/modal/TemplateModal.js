import React from "react";
import "./TemplateModal.css";

const TemplateModal = ({ children }) => {
  return (
    <React.Fragment>
      <div className="dimmed-area">{children}</div>
    </React.Fragment>
  );
};

export default TemplateModal;
