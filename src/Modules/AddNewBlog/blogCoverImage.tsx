import React from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import camera from "@/assets/camera-plus-outline.svg"

export default function BlogCoverImage() {
    return (
        <>
            <Box bgColor='gray.30'
                h='12.5rem'
                w='100%'
                border='1px dashed #C1C1C1'
                p='0.625rem'
                borderRadius='2xl'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Button borderRadius='lg'
                    bgColor='white'
                    color='gray.90'
                    display='flex'
                    gap='.7rem'
                    px={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                    py='1rem'
                    _hover={{
                        opacity: 0.8,
                        boxShadow: '100'
                    }}
                >
                    <Image src={camera} alt="camera" />
                    Add Cover Image
                </Button>

            </Box>

        </>
    )
}
