import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Close } from '@mui/icons-material';
import { Overlay, Modal, CloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalLayout = ({ onClose, children, size }) => {
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <Modal size={size}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        {children}
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default ModalLayout;
