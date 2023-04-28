import { Box } from "@chakra-ui/react";
import Cards from "./components/card";
import CompaniesHeader from "./components/header";

const Companies = (): JSX.Element => {
  return (
    <Box>
      <CompaniesHeader />
      <Cards />
    </Box>
  );
};

export default Companies;
