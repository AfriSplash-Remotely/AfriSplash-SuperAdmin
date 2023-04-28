import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Text, Image, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import forgotPassImg from "@/assets/forgot-password.svg"
import { MdOutlineEmail } from "react-icons/md";
import { forgotPasswordSchema } from "./forgotPassword.schema";

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
    >
      <Box
        py='1rem'
        w='576px'
        px='3rem'
        boxShadow='200'
        rounded='md'
        display='flex'
        justifyContent='center'
        flexDirection='column'
        overflow="hidden"

      >
        <Image src={forgotPassImg} alt="forgotPassImg" width="80%" mx="auto" />
        <Text fontSize={{ base: '3xl', md: '4xl' }} textAlign='center' fontWeight='600'>Forgot  password?</Text>
        <Text textAlign='center' textColor='#606172' mt='1rem'>Enter your email address and we’ll send
          you instructions on how to reset your password.</Text>

        <Box as='form' onSubmit={handleSubmit(onSubmit)}>
          <Box my='4.5rem'>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdOutlineEmail color='#979797' size="1.5rem" />}
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
          <Box display='flex' mb="1.5rem" justifyContent='center'>
            <Button size='md' variant='secondary' width='100%' type="submit" >Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgotPassword;
