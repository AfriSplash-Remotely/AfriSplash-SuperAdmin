import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
export default function BlogCard() {
    return (
        <>
            <Box bgColor='#fff'
                px={{ base: ".8rem", md: ".875rem", lg: "0.875rem" }}
                py={{ base: "1rem", md: "1rem", lg: "1rem" }} borderRadius='xl'
                boxShadow='100'
                w='100'
                display="flex"
                flexDir="column"
            >
                <Box pos='relative'>
                    <Image borderRadius='2xl' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

                    <Box
                        pos='absolute'
                        bgColor='rgba(255, 196, 45, 0.60)'
                        color='#000'
                        p='0.75rem'
                        right='0'
                        top='0.75rem'
                        borderTopLeftRadius='2xl'
                        borderBottomLeftRadius='2xl'
                    >loooror kekek</Box>
                </Box>

                <Box pt='1rem'>
                    <Text fontWeight='medium' color='#000' fontSize='lg'>Product Design</Text>
                    <Text py='1rem' color='#000'>May 30   |  3mins read</Text>
                    <Text noOfLines={2} color='#000' >5 Tips For A Product Manager To
                        Ensure Great Collaboration jejejeujejeju</Text>
                </Box>
            </Box>


        </>
    )
}
