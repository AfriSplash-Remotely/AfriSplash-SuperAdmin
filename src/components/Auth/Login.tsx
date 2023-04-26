import { Box, Button, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLockOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './loginSchema';


interface LoginInputs {
    email: string,
    password: string
}

export default function LogIn(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data: LoginInputs) => console.log(data)
    return (

        <Box as='form' mt='2rem' onSubmit={handleSubmit(onSubmit)}>
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
            <Box py='1rem'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<HiOutlineLockOpen color='#979797' />}
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
                <Link to="/forgot-password">
                    <Text as="u">Forgot Password?</Text>
                </Link>
            </Box>

            <Box mt='2rem' display='flex' justifyContent='center'>
                <Button size='md' variant='secondary' width='100%' type="submit" >Log In</Button>
            </Box>

        </Box>
    )
}