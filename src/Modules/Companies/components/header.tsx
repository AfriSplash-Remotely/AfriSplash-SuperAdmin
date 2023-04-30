import { Box, Divider, HStack, Input, Select, Text } from "@chakra-ui/react";
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
          w={{ lg: "17rem", "2xl": "30rem" }}
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
          w={{ lg: "17rem", "2xl": "30rem" }}
          border="none"
        />
      </Box>

      <Divider orientation="vertical" h="100%" />

      <Box>
        <Select
          placeholder="Date Posted"
          border="none"
          fontSize={{ base: ".9rem", md: "1rem", lg: ".9rem" }}
          fontWeight="500"
          icon={<AiFillCaretDown />}
          iconSize="0.813rem"
        >
          <option>1st Jan, 2022</option>
          <option>4th Jan, 2022</option>
        </Select>
      </Box>

      <Divider orientation="vertical" h="100%" />

      <Box>
        <Select
          placeholder="Job Type"
          border="none"
          fontSize={{ base: ".9rem", md: "1rem", lg: ".9rem" }}
          fontWeight="500"
          icon={<AiFillCaretDown />}
          iconSize="0.813rem"
        >
          <option>Web Development</option>
          <option>UI/UX Design</option>
        </Select>
      </Box>

      <Divider orientation="vertical" h="100%" />

      <Box>
        <Select
          placeholder="Salary"
          border="none"
          fontSize={{ base: ".9rem", md: "1rem", lg: ".9rem" }}
          fontWeight="500"
          icon={<AiFillCaretDown />}
          iconSize="0.813rem"
        >
          <option>$2,000</option>
          <option>$5,000</option>
        </Select>
      </Box>
    </Box>
  );
};

export default CompaniesHeader;
