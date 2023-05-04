import { Box, Divider, Input, Select } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

const TalentsHeader = (): JSX.Element => {
  return (
    <Box
      w={{ base: "100%", md: "100%", lg: "49.063rem", "2xl": "70rem" }}
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
      overflow="auto"
    >
      <Box>
        <Input
          type="text"
          placeholder="search term"
          _placeholder={{
            color: "#676767",
            fontWeight: "bold",
          }}
          bgColor="#F4F4F4"
          borderRadius="0.375rem"
          h={{ lg: "2.188rem" }}
          w={{ lg: "13.625rem", "2xl": "20rem" }}
          border="none"
        />
      </Box>

      <Box>
        <Input
          type="text"
          placeholder="min profile view"
          _placeholder={{
            color: "#676767",
            fontWeight: "bold",
          }}
          bgColor="#F4F4F4"
          borderRadius="0.375rem"
          h={{ lg: "2.188rem" }}
          w={{ lg: "8.813rem", "2xl": "15rem" }}
          border="none"
        />
      </Box>

      <Box>
        <Input
          type="text"
          placeholder="max profile view"
          _placeholder={{
            color: "#676767",
            fontWeight: "bold",
          }}
          bgColor="#F4F4F4"
          borderRadius="0.375rem"
          h={{ lg: "2.188rem" }}
          w={{ lg: "8.813rem", "2xl": "15rem" }}
          border="none"
        />
      </Box>

      <Divider orientation="vertical" h="100%" />

      <Box>
        <Select
          placeholder="Country"
          border="none"
          fontSize={{ base: ".9rem", md: "1rem", lg: ".9rem" }}
          fontWeight="500"
          icon={<AiFillCaretDown />}
          iconSize="0.813rem"
        >
          <option>Nigeria</option>
          <option>Ghana</option>
        </Select>
      </Box>
    </Box>
  );
};

export default TalentsHeader;
