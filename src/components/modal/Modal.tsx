import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import IModalProps from '../../types/modal-props.interface';

export const CustomModal = ({
  isOpen,
  onClose,
  title,
  description,
  confirmButtonText,
  onConfirm,
}: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>

        <ModalFooter>
          <button
            className="text-gray-600 px-4 py-1 mr-2 hover:bg-gray-200 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-charcoal text-white px-4 py-1 rounded font-bold"
            onClick={onConfirm}
          >
            {confirmButtonText ? confirmButtonText : 'Confirm'}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
