import React, { useState } from "react";

const ModalContext = React.createContext({
  openedModalList: {},
  openModal: () => {},
  closeModal: () => {},
});

const ModalProivder = ({ children }) => {
  const [openedModalList, setOpenedModalList] = useState([]);

  const openModal = (name, index) => {
    const newList = [...openedModalList];
    newList.push({
      name: name,
      index: index,
    });
    setOpenedModalList(newList);
  };

  const closeModal = () => {
    const newList = [...openedModalList];
    newList.pop();
    setOpenedModalList(newList);
  };

  return (
    <ModalContext.Provider value={{ openedModalList, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProivder };
