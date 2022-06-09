import React from 'react';
import { ModalContext } from '../Context/ModalContext'

const withModalHook = (Modal, name) => props => {
    const { data, closeModal } = React.useContext(ModalContext)
    
    const handleClose = () => {
        closeModal(name)
    }
    
    if (data?.openedModals.includes(name)) {
        const modalData = data?.modalData[name];
        return <Modal modalData={modalData} onClose={handleClose} {...props} />;
    }
    return null;
};

export default withModalHook;