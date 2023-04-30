import { Box } from "@chakra-ui/react";
import Cards from "./card";

const CompaniesCard = (): JSX.Element => {
  const CardData = [1, 2, 3, 4, 5, 6];
  return (
    <Box
      pt={{ base: "1rem", md: "2.5rem", lg: "3.188rem" }}
      display="flex"
      flexWrap="wrap"
      gap={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
    >
      {CardData.map((c, index: number) => {
        return (
          <Box>
            <Cards index={index} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CompaniesCard;
