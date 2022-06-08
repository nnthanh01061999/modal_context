import React from "react";
import withModalHandler from "../Modal/HOC/withModalHandler";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import { Button } from "antd";
import { ModalHandler } from "../Modal/Context/ModalContext";
const Modal1WithHandler = withModalHandler(Modal1, "MODAL_1");
const Modal2WithHandler = withModalHandler(Modal2, "MODAL_2");

function ExampleModal() {
  const handleOpenModal = () => {
    ModalHandler.openModal("MODAL_1");
  };
  const handleOpenModal2 = () => {
    ModalHandler.openModal("MODAL_2", 'Data chuyển từ example modal');
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3 style={{color: 'white'}}>Example Modal</h3>
      <Button onClick={handleOpenModal}>Open modal 1</Button>
      <Button onClick={handleOpenModal2}>Open modal 2</Button>
      <Modal1WithHandler />
      <Modal2WithHandler />
    </div>
  );
}

export default ExampleModal;
