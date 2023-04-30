import { Box, Divider, HStack, Input, Text } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

const CompaniesHeader = (): JSX.Element => {
  return (
    <Box
      w="100%"
      px={{ base: "1rem", md: "2rem", lg: "2.5rem" }}
      h={{ base: "3.5rem", md: "3.5rem", lg: "3.438rem" }}
      bgColor="#ffffff"
      borderRadius="xl"
      boxShadow="100"
      mt={{ lg: "3.563rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: ".8rem", md: "1rem", lg: "1rem" }}
      overflow={{ base: "auto" }}
    >
      <Box>
        <Input
          type="text"
          placeholder="Organisation Type"
          _placeholder={{
            color: "#676767",
            fontWeight: "bold",
          }}
          bgColor="#F4F4F4"
          borderRadius="0.375rem"
          h={{ lg: "2.188rem" }}
          w={{ lg: "20rem" }}
          border="none"
        />
      </Box>

      <Divider orientation="vertical" h="100%" />

      <Box>
        <Input
          type="text"
          placeholder="Location"
          _placeholder={{
            color: "#676767",
            fontWeight: "bold",
          }}
          bgColor="#F4F4F4"
          borderRadius="0.375rem"
          h={{ lg: "2.188rem" }}
          w={{ lg: "20rem" }}
          border="none"
        />
      </Box>

      <Divider orientation="vertical" h="100%" />

      <HStack spacing={4}>
        <Text
          fontSize={{ base: ".9rem", md: "1rem", lg: "1rem" }}
          fontWeight="500"
        >
          Date Posted
        </Text>
        <AiFillCaretDown size={13} />
      </HStack>

      <Divider orientation="vertical" h="100%" />

      <HStack spacing={4}>
        <Text
          fontSize={{ base: ".9rem", md: "1rem", lg: "1rem" }}
          fontWeight="500"
        >
          Job Type
        </Text>
        <AiFillCaretDown size={13} />
      </HStack>

      <Divider orientation="vertical" h="100%" />

      <HStack spacing={4}>
        <Text
          fontSize={{ base: ".9rem", md: "1rem", lg: "1rem" }}
          fontWeight="500"
        >
          Salary
        </Text>
        <AiFillCaretDown size={13} />
      </HStack>
    </Box>
  );
};

export default CompaniesHeader;
