import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import BlogSearch from './components/blogSearch'

export default function Blog(): JSX.Element {
    return (
        <>
            <Box>
                <Box display='flex' alignItems='center'
                    justifyContent='space-between'
                    mt={{ lg: "2rem" }}
                >
                    <BlogSearch />

                    <Box>
                        <Button
                            _hover={{ bgColor: "primary" }}
                            _active={{ bgColor: "primary" }}
                            borderRadius=".5rem"
                            px={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                            py="1rem"
                        >
                            Create Post
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
