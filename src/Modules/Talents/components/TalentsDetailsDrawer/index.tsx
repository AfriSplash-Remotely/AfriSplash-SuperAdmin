import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";
import PropTypes, { InferProps } from "prop-types";
import { MdClose } from "react-icons/md";
import TalentsDetailsDrawerBody from "./TalentsDetailsDrawerBody";

const TalentsDetailsDrawerProps = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const TalentsDetailsDrawer = ({
  isOpen,
  onClose,
}: InferProps<typeof TalentsDetailsDrawerProps>): JSX.Element => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={{ lg: "sm" }}
      >
        <DrawerContent
          h={{ lg: "90vh" }}
          mr={{ lg: "2.313rem" }}
          mt={{ lg: "2.25rem" }}
          borderRadius="xl"
          boxShadow="100"
          overflow="hidden"
        >
          <DrawerHeader bgColor="#F3F3F3">
            <Box onClick={onClose} cursor="pointer">
              <MdClose />
            </Box>
          </DrawerHeader>

          <DrawerBody paddingInlineStart={0} paddingInlineEnd={0}>
            <TalentsDetailsDrawerBody />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TalentsDetailsDrawer;
