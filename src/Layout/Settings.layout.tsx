import React from "react";
import { Outlet } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SettingsNav from "@/components/SettingNav";

function SettingsLayout(): JSX.Element {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      pt={{ base: "1rem", md: "2.5rem", lg: "4rem" }}
    >
      <SettingsNav />
      <Box
        as="main"
        height="auto"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        overflow="visible"
        width={{ base: "100%", md: "50%" }}
        mx="auto"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py="2rem"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default SettingsLayout;
