import React from "react";
import {ModalReducer} from "../Reducer/ModalReducer";
export const ModalContext = React.createContext();

const ModalContextProvider = ({ children }) => {
  const [data, dispatch] = React.useReducer(ModalReducer, {
    openedModals: [],
    modalData: {},
  });

  const openModal = (name = undefined, data_ = undefined) => {
    if (name) {
      if (!data.openedModals.includes(name)) {
        console.log("aa");
        dispatch({
          type: "OPEN_MODAL",
          payload: {
            name,
            data: data_,
          },
        });
      }
    }
  };

  const closeModal = (name = undefined) => {
    if (name) {
      dispatch({
        type: "CLOSE_MODAL",
        payload: {
          name,
        },
      });
    }
  };

  const closeAllModal = () => {
    dispatch({
      type: "CLOSE_ALL_MODAL",
    });
  };
  const contextData = {
    data,
    closeModal,
    openModal,
    closeAllModal,
  };

  return (
    <ModalContext.Provider value={contextData}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
