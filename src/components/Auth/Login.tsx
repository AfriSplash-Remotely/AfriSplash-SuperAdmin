import { Box, Button, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLockOpen } from "react-icons/hi";


export default function LogIn(): JSX.Element {
    return (

        <Box as='form' mt='2rem'>
            <Box py='1rem'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<MdOutlineEmail color='#979797' />}
                    />
                    <Input type='email' placeholder='email@gmail.com' variant='filled' />
                </InputGroup>
            </Box>
            <Box py='1rem'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<HiOutlineLockOpen color='#979797' />}
                    />
                    <Input type='password' placeholder='Password' variant='filled' />
                </InputGroup>
            </Box>
            <Box display='flex' justifyContent='flex-end' mt='1rem'>
                <Text>Forgot Password?</Text>
            </Box>

            <Box mt='2rem' display='flex' justifyContent='center'>
                <Button size='md' variant='secondary' width='100%' >Log In</Button>
            </Box>

        </Box>
    )
}
