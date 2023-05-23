import { Box, SimpleGrid } from "@chakra-ui/react";
import { DataCard } from "./DataCard";
import { CardDataType } from "../dashboard.interface";

export const Hero = (): JSX.Element => {
  const CardData: Array<CardDataType> = [
    {
      figure: 3000,
      text: "Total Talents",
    },
    {
      figure: 6,
      text: "Total Admins",
    },
    {
      figure: 400,
      text: "Total Open  Jobs",
    },
    {
      figure: 60,
      text: "Jobs Today",
    },
  ];

  const CardDataTwo: Array<CardDataType> = [
    {
      figure: 45,
      text: "Active Complents",
    },
    {
      figure: 1000,
      text: "Total Complents Today",
    },
    {
      figure: 100,
      text: "Total Companies",
    },
  ];

  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: "column", lg: "row" }}
      gap={{ base: "1rem", lg: "7.063rem" }}
    >
      <SimpleGrid
        w={{ base: "100%", md: "24rem" }}
        columns={{ base: 2, sm: 2, md: 2, lg: 2 }}
        spacing={"1rem"}
      >
        {CardData.map((data) => {
          return <DataCard key={data.text} data={data} />;
        })}
      </SimpleGrid>

      <SimpleGrid
        w={{ base: "100%", md: "100%", lg: "35.188rem" }}
        columns={{ base: 2, sm: 2, md: 2, lg: 2 }}
        spacing={"1rem"}
      >
        {CardDataTwo.map((data) => {
          return <DataCard key={data.text} data={data} />;
        })}
      </SimpleGrid>
    </Box>
  );
};
