import React from "react";
import { ModalContext } from "../Context/ModalContext";
export const useControllModal = () => {
  const { closeModal, openModal, closeAllModal } =
    React.useContext(ModalContext);

  return {
    closeModal,
    openModal,
    closeAllModal,
  };
};
