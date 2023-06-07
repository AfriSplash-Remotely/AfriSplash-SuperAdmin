import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { CountriesAndNumberOfUsersType } from "../dashboard.interface";

export const CountriesAndTotalUsers = () => {
  const CountriesData: Array<CountriesAndNumberOfUsersType> = [
    {
      country: "Nigeria",
      totalUsers: 4000,
    },
    {
      country: "Ghana",
      totalUsers: 50,
    },
    {
      country: "Uganda",
      totalUsers: 100,
    },
    {
      country: "Niger",
      totalUsers: 25,
    },
    {
      country: "Cameron",
      totalUsers: 100,
    },
  ];

  return (
    <Box w="100%" mt={{ base: "1rem", md: "1rem", lg: "1.375rem" }}>
      <Box
        fontWeight="700"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: ".8rem", lg: "1rem" }}
        pb={{ base: "1rem", lg: "1.2rem" }}
      >
        <Text>Country</Text>
        <Text>Total Users</Text>
      </Box>
      <Box>
        {CountriesData.map((data) => {
          return (
            <Box key={data.country}>
              <Divider />
              <Flex
                px={{ base: ".8rem", lg: "1rem" }}
                py={{ base: ".7rem", lg: "1.2rem" }}
                alignItems="center"
                justifyContent="space-between"
                fontSize="0.875rem"
              >
                <Text>{data.country}</Text>
                <Text>{data.totalUsers}</Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
