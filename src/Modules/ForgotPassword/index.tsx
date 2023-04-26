import React from "react";
import { Box, Text, Image, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import forgotPassImg from "@/assets/forgot-password.svg"
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from "./forgotPasswordSchema";

interface ForgotPasswordInput {
  email: string
}


function ForgotPassword(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordInput>({
    resolver: yupResolver(forgotPasswordSchema)
  })

  const onSubmit = (data: ForgotPasswordInput) => console.log(data)

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

        <Box as='form' onSubmit={handleSubmit(onSubmit)}>
          <Box py='1rem'>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdOutlineEmail color='#979797' />}
              />
              <Input
                type='email'
                placeholder='email@gmail.com'
                variant='filled'
                {...register("email")}
              />
            </InputGroup>
            <Text as='span' color='error'>{errors.email?.message}</Text>
          </Box>
          <Box mt='1rem' display='flex' justifyContent='center'>
            <Button size='md' variant='secondary' width='100%' type="submit" >Log In</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgotPassword;
