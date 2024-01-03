import { useContext, useEffect } from "react";
import HelpModal from "./HelpModal";
import LoginModal from "./LoginModal";
import { ModalContext } from "../../context/ModalContext";

const Modals = () => {
  const { openedModalList } = useContext(ModalContext);

  useEffect(() => {
    console.log(openedModalList);
  }, [openedModalList]);

  const isExistModal = (name) => {
    console.log(openedModalList);
    const is = openedModalList.find((modal) => modal.name.name === name);
    console.log(is);
    return is;
  };

  return (
    <div className="modals">
      <LoginModal status={isExistModal("discordLogin")}></LoginModal>
      <HelpModal></HelpModal>
    </div>
  );
};

export default Modals;
