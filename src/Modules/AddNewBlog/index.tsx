import React, { useState } from 'react'
import { Box, Input, Button } from '@chakra-ui/react'
import BlogCoverImage from './blogCoverImage'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddNewBlog(): JSX.Element {
    const [value, setValue] = useState<string>('')
    return (
        <>
            <Box mt={{ base: "1rem", md: "2rem", lg: "3rem" }}
                px={{ base: '1rem', md: '4rem', lg: '5rem' }}
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
            >
                <BlogCoverImage />

                <Box mt='3rem' w='100%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDir='column'
                >
                    <Box
                        w='80%'
                        px='1rem'
                        bgColor='white'
                        borderRadius='2xl'
                        display='flex'
                        alignItems='center'
                        h={{ base: "3.5rem", md: "3.5rem", lg: "4rem" }}
                        border='1px dashed #C1C1C1'
                    >

                        <Box mt='.5rem'>
                            <Input type='text'
                                variant='filled'
                                focusBorderColor='none'
                                size='lg'
                                placeholder='New Post Title Here ...'
                                _placeholder={{
                                    color: 'gray.50',
                                    fontWeight: 'medium',
                                    fontSize: '4xl'
                                }}
                                h={{ lg: "2.188rem" }}
                                border='none'
                                w="53rem"

                            />
                        </Box>
                    </Box>
                    <Box mt='2rem'
                        bgColor='white'
                        border='1px dashed #C1C1C1'
                        p='.5rem'
                        w='80%'
                        borderRadius='2xl'
                    >
                        <ReactQuill theme='snow' placeholder='Write your post content here....' value={value} onChange={setValue} />
                    </Box>
                </Box>

            </Box >

            <Box mt='3rem'
                px={{ base: '1rem', md: '4rem', lg: '5rem' }}
                display='flex'
                gap='1.5rem'
            >
                <Button
                    _hover={{ bgColor: "primary" }}
                    borderRadius="lg"
                    px={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                    py="1rem">
                    Publish Post
                </Button>

                <Button bgColor='amber.110'
                    _hover={{ bgColor: 'amber.110' }}
                    borderRadius="lg"
                    px={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                    py="1rem"
                    color='green.110'
                >
                    Save as draft
                </Button>

            </Box>

        </>
    )
}
