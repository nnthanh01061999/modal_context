import { Button, Modal } from "antd";
import React from "react";
import { useControllModal } from "../Modal/Hook/ModalHook";

function Modal1(props) {
  const { onClose } = props;
  const { openModal } = useControllModal();

  const handleOpenModal = () => {
    openModal("MODAL_2", "data chuyển từ modal 1");
  };

  console.log("render modal 2");

  React.useEffect(() => {
    console.log("mount modal 2");
    return () => {
      console.log("unmout modal 2");
    };
  }, []);

  return (
    <Modal
      closable={true}
      visible={true}
      footer={null}
      onCancel={onClose}
      width={500}
      bodyStyle={{ height: "auto" }}
      title={"Modal 1"}
      style={{ marginLeft: 100 }}
    >
      <div>
        <p>Modal 1</p>
        <Button onClick={handleOpenModal}>Open Modal 2</Button>
      </div>
    </Modal>
  );
}

export default Modal1;
