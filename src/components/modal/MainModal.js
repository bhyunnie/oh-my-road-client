import { useContext, useEffect } from "react";
import HelpModal from "./HelpModal";
import LoginModal from "./LoginModal";
import { ModalContext } from "../../context/ModalContext";

const Modals = () => {
  const { openedModalList } = useContext(ModalContext);

  useEffect(() => {
    console.log(openedModalList);
  }, [openedModalList]);
  return (
    <div className="modals">
      <LoginModal></LoginModal>
      <HelpModal></HelpModal>
    </div>
  );
};

export default Modals;
