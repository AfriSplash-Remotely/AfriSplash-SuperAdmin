import { Box, SimpleGrid } from "@chakra-ui/react";
import Cards from "./components/card";
import CompaniesHeader from "./components/header";

const Companies = (): JSX.Element => {
  const CardData = [1, 2, 3, 4, 5, 6];

  return (
    <Box>
      <CompaniesHeader />
      <SimpleGrid pt={{ base: "1rem", md: "2.5rem", lg: "3.188rem" }}
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: "1.5rem", md: "2rem", lg: "2rem" }}>
        {CardData.map((item) => {
          return (
            <Cards key={item} />
          )
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Companies;
