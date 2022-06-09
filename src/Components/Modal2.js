import { Button, Modal } from "antd";
import React from "react";
import { useControllModal } from "../Modal/Hook/ModalHook";

function Modal2(props) {
  const { onClose } = props;
  const data = props.modalData;
  const { closeAllModal , closeModal} = useControllModal();

  const handleCloseAll = () => {
    closeAllModal();
  };

  const handleCloseModal1 = () => {
    closeModal('MODAL_1')
  }
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
      title={"Modal 2"}
      style={{ marginRight: 100 }}
    >
      <div>
        <p>Modal 2</p>
        <p>Data: {data}</p>
        <Button onClick={handleCloseModal1}>Close Modal 1</Button>
        <Button onClick={handleCloseAll}>Close All Modal</Button>
      </div>
    </Modal>
  );
}

export default Modal2;
