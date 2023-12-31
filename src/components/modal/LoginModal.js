import "./LoginModal.css";
import TemplateModal from "./TemplateModal";

const LoginModal = ({ children, status }) => {
  return status ? (
    <TemplateModal>
      <div className="login-modal"></div>;
    </TemplateModal>
  ) : (
    ""
  );
};

export default LoginModal;
