import { Box, Divider, HStack, Image, Text, Flex } from "@chakra-ui/react";
import ProfileImage from "../../../../assets/user-profile-image.png";

const TalentsDetailsDrawerBody = (): JSX.Element => {
  return (
    <>
      <Box pt={{ lg: "1.5rem" }} pb={{ lg: "1rem" }} px={{ lg: "1.5rem" }}>
        <Box
          overflow="hidden"
          w="5rem"
          h="5rem"
          borderRadius="xl"
          mb={{ lg: "1rem" }}
        >
          <Image alt="Uzor Samuel" src={ProfileImage} w="100%" h="100%" />
        </Box>
        <Box color="#000" w={{ lg: "21.875rem" }} fontSize={{ lg: ".875rem" }}>
          <Text fontWeight="bold" fontSize={{ lg: "1.5rem" }}>
            Uzor Samuel
          </Text>
          <Text fontSize={{ lg: "0.875rem" }}>
            Am a frontend developer, with 6yrs experience in vuejs, React.js and
            typescript
          </Text>
          <Text color="#858585" mt={{ lg: "1.5rem" }}>
            Lagos, Nigeria
          </Text>
        </Box>
      </Box>

      <Divider />

      <Box px={{ lg: "1.5rem" }} py={{ lg: "2.3rem" }}>
        <Text fontWeight="bold" fontSize={{ lg: "1.125rem" }}>
          Analytics
        </Text>
        <HStack
          spacing={5}
          pt={{ lg: "2.3rem" }}
          color="white"
          fontSize="0.875rem"
          fontWeight="500"
        >
          <Box bgColor="primary" py=".5rem" px=".75rem" rounded="full">
            47 profile views
          </Box>
          <Box bgColor="primary" py=".5rem" px=".75rem" rounded="full">
            21 search appearances
          </Box>
        </HStack>
      </Box>

      <Divider />

      <Box pt={{ lg: "1rem" }}>
        <Flex
          px={{ lg: "1.5rem" }}
          alignItems="center"
          justifyContent="space-between"
          fontSize="0.875rem"
          color="#656565"
          fontWeight="500"
          w="100%"
        >
          <Text>Skills</Text>
          <Text>Experience</Text>
          <Text>Education</Text>
          <Text>Projects</Text>
          <Text>Publications</Text>
        </Flex>
      </Box>
    </>
  );
};

export default TalentsDetailsDrawerBody;
