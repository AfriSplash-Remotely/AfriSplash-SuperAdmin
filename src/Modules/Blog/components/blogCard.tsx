import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import PropTypes, { InferProps } from "prop-types";

const BlogCardProp = {
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    read_time: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    blog_cat: PropTypes.string.isRequired
}

export default function BlogCard({ image_url, title, createdAt, read_time, summary, blog_cat }: InferProps<typeof BlogCardProp>): JSX.Element {
    return (
        <>
            <Box bgColor='white'
                px={{ base: ".8rem", md: ".875rem", lg: "0.875rem" }}
                py={{ base: "1rem", md: "1rem", lg: "1rem" }} borderRadius='xl'
                boxShadow='100'
                w='100'
                display="flex"
                flexDir="column"
            >
                <Box pos='relative'>
                    <Image borderRadius='2xl' src={image_url} alt={title} />

                    <Box
                        pos='absolute'
                        bgColor='rgba(255, 196, 45, 0.60)'
                        color='gray.90'
                        p='0.75rem'
                        right='0'
                        top='0.75rem'
                        borderTopLeftRadius='2xl'
                        borderBottomLeftRadius='2xl'
                    >{blog_cat}</Box>
                </Box>

                <Box pt='1rem'>
                    <Text fontWeight='medium' color='gray.90' fontSize='lg'>{title}</Text>
                    <Text py='1rem' color='gray.90'>{createdAt}   |  {read_time}mins read</Text>
                    <Text noOfLines={2} color='gray.90' >{summary}</Text>
                </Box>
            </Box>


        </>
    )
}
