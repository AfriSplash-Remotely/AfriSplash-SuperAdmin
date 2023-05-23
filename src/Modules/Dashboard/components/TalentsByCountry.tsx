import { Box, Flex, HStack, Select, Text } from "@chakra-ui/react";
import { CountriesAndTotalUsers } from "./CountriesAndTotalUsers";
import { CountriesDataCharts } from "./CountriesDataCharts";

export const TalentsByCountry = (): JSX.Element => {
  return (
    <Box
      mt={{ base: "2rem", lg: "3.063rem" }}
      pb="1rem"
      w="100%"
      borderRadius="xl"
      boxShadow="100"
      borderTop="1.25rem solid #0D5520"
      overflow="hidden"
      bgColor="white"
    >
      <Box
        px={{ base: ".8rem", lg: "1rem" }}
        py={{ base: ".5rem", lg: "1.5rem" }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontWeight="700">Talents By Country</Text>
          <HStack
            spacing={1}
            bgColor="white"
            py="0.75rem"
            px="0.75rem"
            boxShadow="100"
            borderRadius="xl"
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Select placeholder="Year" fontWeight="bold" variant="unstyled">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </Select>
            <Box
              bgColor="#EDEDED"
              color="#5B5B5B"
              py="0.25rem"
              px="0.75rem"
              rounded="full"
              fontWeight="500"
            >
              2021
            </Box>
          </HStack>
        </Flex>
      </Box>
      <CountriesDataCharts />
      <CountriesAndTotalUsers />
    </Box>
  );
};
