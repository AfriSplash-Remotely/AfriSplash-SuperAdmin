import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { IModalProps } from "./modal_interface";

export const GeneralModalTwo = ({
  isOpen,
  onClose,
  children,
}: IModalProps): JSX.Element => {
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      size={{ lg: "lg" }}
    >
      <ModalOverlay />
      <ModalContent borderRadius="xl" overflow="hidden">
        <ModalBody paddingInlineStart={0} paddingInlineEnd={0} p={0}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
