import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Modal,
  Divider,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import propTypes, { InferProps } from "prop-types";
import { GeneralModalTwo } from "@/components/Modal/medium_modal";

const reportModalProps = {
  isOpen: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
};

const ReportModal = ({
  isOpen,
  onClose,
}: InferProps<typeof reportModalProps>): JSX.Element => {
  return (
    <Box>
      <GeneralModalTwo isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report</ModalHeader>
          <ModalCloseButton />

          <VStack>
            <Image></Image>
            <Text>Uzor Samuel</Text>
            <Text>
              Am a frontend developer, with 6yrs experence in vuejs, React.js
              and typescript
            </Text>
          </VStack>

          <Text>Lagos, Nigeria</Text>

          <Divider />

          <ModalBody>
            <Box>
              <Text mb="2rem">Report</Text>

              <Text>
                Lorem ipsum dolor sit amet consectetur. Egestas ante morbi non
                quis arcu id. Aliquet faucibus faucibus id lobortis amet
                tincidunt vivamus felis. Pulvinar est vulputate ut sit. Duis
                faucibus enim fusce hendrerit integer. Pretium molestie amet
                vestibulum facilisis montes nunc commodo diam. Ac nunc varius
                lectus facilisis. Cras vitae dignissim non commodo ipsum sit est
                ut. Sed dictumst donec nec aliquet. Ut in sed accumsan convallis
                cursus odio ut sit. Purus pellentesque diam vel condimentum.
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </GeneralModalTwo>
    </Box>
  );
};

export default ReportModal;
