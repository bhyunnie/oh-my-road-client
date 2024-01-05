import { useContext, useEffect } from "react";
import HelpModal from "./HelpModal";
import LoginModal from "./LoginModal";
import { ModalContext } from "../../context/ModalContext";

const Modals = () => {
  const { openedModalList } = useContext(ModalContext);

  useEffect(() => {}, [openedModalList]);

  const isExistModal = (name) => {
    return openedModalList.find((modal) => modal.name === name);
  };

  return (
    <div className="modals">
      <LoginModal status={isExistModal("discordLogin")}></LoginModal>
      <HelpModal></HelpModal>
    </div>
  );
};

export default Modals;
