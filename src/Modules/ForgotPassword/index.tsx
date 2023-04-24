import React from "react";
import { Box, Text, Image, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import forgotPassImg from "../../assets/forgot-password.svg"
import { MdOutlineEmail } from "react-icons/md";


function ForgotPassword(): JSX.Element {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        py='1rem'
        w='576px'
        px='3rem'
        boxShadow='md'
        rounded='md'
        display='flex'
        justifyContent='center'
        flexDirection='column'

      >
        <Image src={forgotPassImg} alt="forgotPassImg" />
        <Text fontSize='3xl' textAlign='center' fontWeight='bold'>Forgot  password?</Text>
        <Text textAlign='center' textColor='#606172' mt='1rem'>Enter your email address and we’ll send you instructions on how to reset your password.</Text>

        <Box as='form'>
          <Box py='1rem'>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdOutlineEmail color='#979797' />}
              />
              <Input type='email' placeholder='email@gmail.com' variant='filled' />
            </InputGroup>
          </Box>
          <Box mt='1rem' display='flex' justifyContent='center'>
            <Button size='md' variant='secondary' width='100%' >Log In</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgotPassword;
