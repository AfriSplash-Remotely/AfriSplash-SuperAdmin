import React from 'react'
import { Box, Input } from '@chakra-ui/react'
export default function BlogSearch(): JSX.Element {
    return (
        <Box w='70%'
            px={{ base: "1rem", md: "2rem", lg: "2.5rem" }}
            h={{ base: "3.5rem", md: "3.5rem", lg: "3.438rem" }}
            bgColor="#ffffff"
            borderRadius="xl"
            boxShadow="100"
            display='flex'
            alignItems='center'

        >
            <Box>
                <Input type="text"
                    placeholder='search term'
                    _placeholder={{
                        color: "#676767",
                        fontWeight: "bold",
                    }}
                    bgColor="#F4F4F4"
                    borderRadius="0.375rem"
                    h={{ lg: "2.188rem" }}
                    w={{ lg: "18.625rem", "2xl": "20rem" }}
                    border="none"



                />
            </Box>
        </Box>
    )
}
