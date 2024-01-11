import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import propTypes, { InferProps } from "prop-types";
import { GeneralModalTwo } from "@/components/Modal/medium_modal";
import { MdClose } from "react-icons/md";
import ProfileImage from "@/assets/user-profile-image.png";

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
        <Box fontFamily="mono">
          <Box
            bgColor="#F3F3F3"
            pt={{ lg: "1.5rem" }}
            px={{ lg: "1.5rem" }}
            pb={{ lg: ".75rem" }}
          >
            <HStack fontSize={{ lg: "1.125rem" }} spacing={4} fontWeight="500">
              <Box onClick={onClose} cursor="pointer">
                <MdClose />
              </Box>
              <Text>Report</Text>
            </HStack>
          </Box>
          <Box pt={{ lg: "2.25rem" }} pb={{ lg: "1rem" }} px={{ lg: "1.5rem" }}>
            <Box
              overflow="hidden"
              w="5rem"
              h="5rem"
              borderRadius="xl"
              mb={{ lg: "1rem" }}
            >
              <Image alt="Uzor Samuel" src={ProfileImage} w="100%" h="100%" />
            </Box>
            <Box
              color="#000"
              w={{ lg: "21.875rem" }}
              fontSize={{ lg: ".875rem" }}
            >
              <Text fontWeight="500" fontSize={{ lg: "1.5rem" }}>
                Uzor Samuel
              </Text>
              <Text>
                Am a frontend developer, with 6yrs experence in vuejs, React.js
                and typescript
              </Text>
              <Text fontWeight="500" color="#858585" mt={{ lg: "1.5rem" }}>
                Lagos, Nigeria
              </Text>
            </Box>
          </Box>

          <Divider />

          <Box
            pt={{ lg: "1.5rem" }}
            w="100%"
            pb={{ lg: ".75rem" }}
            px={{ lg: "1.5rem" }}
          >
            <Text fontSize={{ lg: "1.125rem" }} fontWeight="500">
              Report
            </Text>
            <Text
              borderColor="#F3F3F3"
              mt={{ lg: "1.5rem" }}
              mb={{ lg: ".75rem" }}
              borderRadius="xl"
              outline="none"
            >
              Lorem ipsum dolor sit amet consectetur. Egestas ante morbi non
              quis arcu id. Aliquet faucibus faucibus id lobortis amet tincidunt
              vivamus felis. Pulvinar est vulputate ut sit. Duis faucibus enim
              fusce hendrerit integer. Pretium molestie amet vestibulum
              facilisis montes nunc commodo diam. Ac nunc varius lectus
              facilisis. Cras vitae dignissim non commodo ipsum sit est ut. Sed
              dictumst donec nec aliquet. Ut in sed accumsan convallis cursus
              odio ut sit. Purus pellentesque diam vel condimentum.
            </Text>
          </Box>
        </Box>
      </GeneralModalTwo>
    </Box>
  );
};

export default ReportModal;
