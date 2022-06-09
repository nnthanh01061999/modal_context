import React from "react";
import withModalHook from "../Modal/HOC/withModal";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import { Button } from "antd";
import { useControllModal } from "../Modal/Hook/ModalHook";
const Modal1WithHandler = withModalHook(Modal1, "MODAL_1");
const Modal2WithHandler = withModalHook(Modal2, "MODAL_2");

function ExampleModal() {
  const { openModal } = useControllModal();

  const handleOpenModal = () => {
    openModal("MODAL_1");
  };
  const handleOpenModal2 = () => {
    openModal("MODAL_2", "Data chuyển từ example modal");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ color: "white" }}>Example Modal</h3>
      <Button onClick={handleOpenModal}>Open modal 1</Button>
      <Button onClick={handleOpenModal2}>Open modal 2</Button>
      <Modal1WithHandler />
      <Modal2WithHandler />
    </div>
  );
}

export default ExampleModal;
