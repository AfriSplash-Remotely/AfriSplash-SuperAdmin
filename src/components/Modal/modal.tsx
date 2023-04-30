import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { IModalProps } from "./modal_interface";

export const GeneralModal = ({
  isOpen,
  onClose,
  children,
}: IModalProps): JSX.Element => {
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      size={{ lg: "xl" }}
    >
      <ModalOverlay />
      <ModalContent borderRadius={{ lg: "1.5rem" }} minW={{ lg: "47rem" }}>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
