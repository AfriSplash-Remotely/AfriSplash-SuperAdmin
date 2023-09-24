import React from 'react'
import { Box, Input } from '@chakra-ui/react'
export default function BlogSearch(): JSX.Element {
    return (
        <Box w='70%'
            px={{ base: "1rem", md: "2rem", lg: "2.5rem" }}
            h={{ base: "3.5rem", md: "3.5rem", lg: "3.438rem" }}
            bgColor="white"
            borderRadius="xl"
            boxShadow="100"
            display='flex'
            alignItems='center'

        >
            <Box>
                <Input type="text"
                    placeholder='search term'
                    _placeholder={{
                        color: "gray.90",
                        fontWeight: "bold",
                    }}
                    bgColor="gray.110"
                    borderRadius="md"
                    h={{ lg: "2.188rem" }}
                    w="53rem"
                    border="none"

                />
            </Box>
        </Box>
    )
}
