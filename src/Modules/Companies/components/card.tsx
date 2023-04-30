import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../../../assets/logo.svg";
import { RiBankFill } from "react-icons/ri";
import { TiLocationArrow } from "react-icons/ti";
import { MdPeopleOutline } from "react-icons/md";
import { TbArrowNarrowRight } from "react-icons/tb";
import PropTypes, { InferProps } from "prop-types";

const cardProps = {
  onOpen: PropTypes.func.isRequired,
};

const Cards = ({ onOpen }: InferProps<typeof cardProps>): JSX.Element => {
  return (
    <>
      <Box
        w="100%"
        bgColor="#ffffff"
        px={{ base: ".8rem", md: ".875rem", lg: "0.875rem" }}
        py={{ base: "1.5rem", md: "1.5rem", lg: "1.5rem" }}
        borderRadius="xl"
        boxShadow="100"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Box w={{ base: "5rem", md: "6.25rem", lg: "6.25rem" }}>
          <Image src={Logo} alt="Logo" w="100%" h="100%" objectFit="contain" />
        </Box>
        <Text
          my={{ base: ".5rem", md: "1rem", lg: "1rem" }}
          fontSize={{ base: "1.15rem", md: "1.25rem", lg: "1.25rem" }}
        >
          Afrisplash Remotely
        </Text>
        <Text color="#58586B" textAlign="center">
          The gateway to Africa s remote workforce: Africa's #1 remote work
          community and largest open source remote work marketplace
        </Text>
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          fontWeight="light"
          my={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontSize={{ base: ".9rem", md: "1rem", lg: "1rem" }}
        >
          <HStack>
            <RiBankFill color="#1C2E4599" size={20} />
            <Text>Fintech</Text>
          </HStack>
          <HStack>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor="#1C2E4599"
              rounded="full"
              w="1.3rem"
              h="1.3rem"
            >
              <TiLocationArrow color="#ffffff" size={20} />
            </Box>
            <Text>Lagos, Nigeria</Text>
          </HStack>
        </Flex>
        <HStack
          mb={{ base: "1.2rem", md: "1.5rem", lg: "1.563rem" }}
          fontSize={{ base: ".9rem", md: "1rem", lg: "1rem" }}
        >
          <MdPeopleOutline color="#1C2E4599" size={24} />
          <Text>12- 40 employees</Text>
        </HStack>
        <Box w="100%">
          <Button
            w="100%"
            py={{ lg: "1.5rem" }}
            rightIcon={<TbArrowNarrowRight size={24} />}
            onClick={() => onOpen()}
            _hover={{ bgColor: "primary" }}
            _active={{ bgColor: "primary" }}
          >
            12 open roles
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
