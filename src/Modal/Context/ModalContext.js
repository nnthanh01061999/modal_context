import React from "react";

export let ModalHandler = {};
export const ModalContext = React.createContext();

const ModalContextProvider = ({ children }) => {
  const [data, setData] = React.useState({
    openedModals: [],
    modalData: {},
  });

  const openModal = (name = undefined, data_ = undefined) => {
    if (name) {
      if (!data.openedModals.includes(name)) {
        setData({
          ...data,
          openedModals: [...data.openedModals, name],
          modalData: {
            ...data.modalData,
            [name]: data_,
          },
        });
      }
    }
  };

  const closeModal = (name = undefined) => {
    if (name) {
      setData({
        ...data,
        openedModals: data?.openedModals?.filter((item) => item !== name),
        modalData: {
          ...data.modalData,
          [name]: undefined,
        },
      });
    }
  };

  const closeAllModal = () => {
    setData({
      ...data,
      openedModals: [],
      modalData: {},
    });
  };

  const contextData = {
    data,
    openModal,
    closeModal,
    closeAllModal,
  };

  ModalHandler = {
    openModal,
    closeModal,
    closeAllModal,
  };

  return (
    <ModalContext.Provider value={contextData}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
