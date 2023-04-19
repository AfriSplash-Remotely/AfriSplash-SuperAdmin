import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function AuthLayout(): JSX.Element {
  return (
    <Box as="main">
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
