import { Box, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Cards from "./components/card";
import CompaniesHeader from "./components/header";
import CompaniesCardModal from "./components/companies_card_modal";

const Companies = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CardData = [1, 2, 3, 4, 5, 6];

  return (
    <Box>
      <CompaniesHeader />
      <SimpleGrid
        pt={{ base: "1rem", md: "2.5rem", lg: "3.188rem" }}
        columns={{ base: 1, sm: 1, md: 1, lg: 3, "2xl": 4 }}
        spacing={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
      >
        {CardData.map((item) => {
          return <Cards key={item} onOpen={onOpen} />;
        })}
      </SimpleGrid>
      <CompaniesCardModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Companies;
