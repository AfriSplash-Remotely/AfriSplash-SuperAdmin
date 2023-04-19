import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function MainLayout(): JSX.Element {
  return (
    <Box as="main">
      <Outlet />
    </Box>
  );
}

export default MainLayout;
