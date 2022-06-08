import { Button, Modal } from "antd";
import React from "react";
import { ModalHandler } from "../Modal/Context/ModalContext";

function Modal2(props) {
  const { onClose } = props;
  const data = props.modalData;

  const handleCloseAll = () => {
    ModalHandler.closeAllModal();
  };
  console.log('render modal 2')

  React.useEffect(()=>{
    console.log("mount modal 2");
    return () => {
        console.log("unmout modal 2");
    }
  },[])

  return (
    <Modal
      closable={true}
      visible={true}
      footer={null}
      onCancel={onClose}
      width={500}
      bodyStyle={{ height: "auto" }}
      title={"Modal 2"}
      style={{ marginRight: 100}}
    >
      <div>
        <p>Modal 2</p>
        <p>Data: {data}</p>
        <Button onClick={handleCloseAll}>Close All Modal</Button>
      </div>
    </Modal>
  );
}

export default Modal2;
