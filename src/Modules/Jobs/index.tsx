import React from "react";
import { Box, Input, Flex, Spacer, Divider } from "@chakra-ui/react";
import Select from "react-select";
import { BiFilter } from "react-icons/bi";
import TableContent from "./components/TableContent";

const jobType = [
  { value: "fullTime", label: "Full Time" },
  { value: "remote", label: "Remote" },
  { value: "contract", label: "Contract" },
];

const salary = [
  { value: "High", label: "$200k" },
  { value: "Medium", label: "$100k" },
  { value: "Low", label: "$50k" },
];

const date = [
  { value: "High", label: "$200k" },
  { value: "Medium", label: "$100k" },
  { value: "Low", label: "$50k" },
];

const selectSty = {
  control: (base: any) => ({
    ...base,
    border: "none",
  }),
};
function Jobs(): JSX.Element {
  return (
    <>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Flex
            bg="white"
            borderRadius="xl"
            boxShadow="100"
            textAlign="center"
            alignItems="center"
            paddingX="1.8rem"
            h={{ base: "3.5rem", md: "3.5rem", lg: "3.438rem" }}
          >
            <Box paddingX="1rem" paddingY="0.625rem">
              <Input placeholder="Company" width="auto" backgroundColor="#F4F4F4" _placeholder={{ color: "#676767" }} />
            </Box>
            <Divider orientation="vertical" h="100%" />

            <Box paddingX="1rem" paddingY="0.625rem">
              <Input
                placeholder="Location"
                width="auto"
                backgroundColor="#F4F4F4"
                _placeholder={{ color: "#676767" }}
              />
            </Box>
            <Divider orientation="vertical" h="100%" />

            <Box paddingX="1rem" paddingY="0.625rem">
              <Select options={jobType} placeholder="Date posted" styles={selectSty} />
            </Box>
            <Divider orientation="vertical" h="100%" />

            <Box paddingX="1rem" paddingY="0.625rem">
              <Select options={salary} placeholder="Salary" styles={selectSty} />
            </Box>
            <Divider orientation="vertical" h="100%" />

            <Box paddingX="1rem" paddingY="0.625rem">
              <Select options={salary} placeholder="Job Type" styles={selectSty} />
            </Box>
          </Flex>
          <Spacer />
          <Box
            display="flex"
            gap="1rem"
            padding="0.6rem"
            borderRadius="lg"
            boxShadow="50"
            textAlign="center"
            alignItems="center"
          >
            <BiFilter />
            <p>Filters</p>
          </Box>
        </Box>
      </Box>

      <Box marginTop="10">
        <TableContent />
      </Box>
    </>
  );
}

export default Jobs;
