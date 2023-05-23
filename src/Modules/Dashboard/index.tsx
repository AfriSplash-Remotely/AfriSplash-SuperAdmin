import React from "react";
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { TalentsByCountry } from "./components/TalentsByCountry";
import { DataCard } from "./components/DataCard";
import { CardDataType } from "./dashboard.interface";

function Dashboard(): JSX.Element {
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
    // {
    //   figure: 100,
    //   text: "Total Companies",
    // },
  ];
  return (
    <Box pt={{ lg: "2.5rem" }}>
      <Box
        display="flex"
        flexDir={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", lg: "7.063rem" }}
      >
        <SimpleGrid
          w={'100%'}
          columns={{ base: 2, sm: 2, md: 2, lg: 2 }}
          spacing={"1rem"}
        >
          {CardData.map((data) => {
            return <DataCard key={data.text} data={data} />;
          })}
        </SimpleGrid>

        <Grid
          w={'100%'}
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={4}
        >
          {CardDataTwo.map((data) => {
            return <GridItem key={data.text} colSpan={[4, 2]}>
              <DataCard data={data} />
            </GridItem>
          })}

          <GridItem colSpan={4}>
            <DataCard data={{
              figure: 100,
              text: "Total Companies",
            }} />
          </GridItem>
        </Grid>

      </Box>
      <TalentsByCountry />
    </Box>
  );
}

export default Dashboard;
