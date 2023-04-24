import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { LogIn } from "@/components/Auth";

function Login(): JSX.Element {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      py='6rem'
    >
      <Box
        py='4rem'
        w='576px'
        px='3rem'
        boxShadow='md'
        rounded='md'

      >
        <Text fontSize='3xl' textAlign='center' fontWeight='bold'>Admin Login</Text>
        <LogIn />
      </Box>


    </Box>
  )
}

export default Login;
