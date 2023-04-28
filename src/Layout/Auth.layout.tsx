import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import Logo from "@/assets/AfriSplash-Logo.png"


function AuthLayout(): JSX.Element {
  return (
    <Box as="main">
      <Box display='flex' justifyContent='center' mt='3rem'>
        <Image src={Logo} alt="logo" />
      </Box>
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
