import "./HelpModal.css";
import TemplateModal from "./TemplateModal";

const HelpModal = ({ children, status }) => {
  return status ? (
    <TemplateModal>
      <div className="login-modal"></div>;
    </TemplateModal>
  ) : (
    ""
  );
};

export default HelpModal;
