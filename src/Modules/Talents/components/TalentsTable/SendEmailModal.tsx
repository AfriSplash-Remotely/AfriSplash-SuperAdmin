import { GeneralModalTwo } from "@/components/Modal/modal_two";
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import PropTypes, { InferProps } from "prop-types";
import { MdClose } from "react-icons/md";
import ProfileImage from "../../../../assets/user-profile-image.png";

const sendEmailModalProps = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const SendEmailModal = ({
  isOpen,
  onClose,
}: InferProps<typeof sendEmailModalProps>): JSX.Element => {
  return (
    <>
      <GeneralModalTwo isOpen={isOpen} onClose={onClose}>
        <Box>
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
              <Text>Send Email</Text>
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
              <Text fontWeight="bold" fontSize={{ lg: "1.5rem" }}>
                Uzor Samuel
              </Text>
              <Text>
                Am a frontend developer, with 6yrs experence in vuejs, React.js
                and typescript
              </Text>
              <Text color="#858585" mt={{ lg: "1.5rem" }}>
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
            <Text fontSize={{ lg: "1.125rem" }} fontWeight="bold">
              write message
            </Text>
            <Textarea
              bgColor="#F3F3F3"
              borderColor="#F3F3F3"
              mt={{ lg: "1.5rem" }}
              mb={{ lg: ".75rem" }}
              borderRadius="xl"
              h={{ lg: "12.5rem" }}
              outline="none"
            />
            <Button
              w="100%"
              bgColor="secondary"
              _hover={{ bgColor: "secondary" }}
              _active={{ bgColor: "secondary" }}
            >
              Send Email
            </Button>
          </Box>
        </Box>
      </GeneralModalTwo>
    </>
  );
};
