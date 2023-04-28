import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Text, Button, Input, InputGroup, InputLeftElement, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLockOpen } from "react-icons/hi";
import { loginSchema } from './login.schema';

interface LoginInputs {
  email: string,
  password: string
}


function Login(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: LoginInputs) => console.log(data)

  return (
    <Box>
      <Box
        py='4rem'
        w='576px'
        px='3rem'
        boxShadow='200'
        rounded='md'
        overflow="hidden"
      >
        <Text fontSize={{ base: '3xl', md: '4xl' }} textAlign='center' fontWeight='600'>Admin Login</Text>
        <Box as='form' onSubmit={handleSubmit(onSubmit)}>
          <Box my='4.5rem'>
            <Box mb="1.5rem">
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
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<HiOutlineLockOpen color='#979797' size="1.5rem" />}
                />
                <Input
                  type='password'
                  placeholder='Password'
                  variant='filled'
                  {...register("password")}
                />
              </InputGroup>
              <Text as='span' color='error'>{errors.password?.message}</Text>

            </Box>
            <Box display='flex' justifyContent='flex-end' mt='1rem'>
              <Link as={RouterLink} to="/forgot-password">
                <Text as="u">Forgot Password?</Text>
              </Link>
            </Box>
          </Box>

          <Box display='flex' justifyContent='center'>
            <Button size='md' variant='secondary' width='100%' type="submit" >Log In</Button>
          </Box>

        </Box>
      </Box>


    </Box>
  )
}

export default Login;
