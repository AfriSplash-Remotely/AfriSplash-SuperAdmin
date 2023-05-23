import React from "react";
import { Box } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { TalentsByCountry } from "./components/TalentsByCountry";

function Dashboard(): JSX.Element {
  return (
    <Box pt={{ lg: "2.5rem" }}>
      <Hero />
      <TalentsByCountry />
    </Box>
  );
}

export default Dashboard;
