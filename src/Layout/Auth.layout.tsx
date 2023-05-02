import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Box, Image, Link } from "@chakra-ui/react";
import Logo from "@/assets/AfriSplash-Logo.png"


function AuthLayout(): JSX.Element {
  return (
    <Box >
      <Box display='flex' justifyContent='center' mt='3rem'>
        <Link as={RouterLink} to="/">
          <Image src={Logo} alt="logo" />

        </Link>
      </Box>
      <Box as="main" display='flex' justifyContent='center' alignItems="center" height="calc(100vh - 8rem)">
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
