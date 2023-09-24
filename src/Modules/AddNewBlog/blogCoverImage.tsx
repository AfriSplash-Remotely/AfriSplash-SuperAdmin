import React, { useState, useRef } from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import camera from "@/assets/camera-plus-outline.svg"

export default function BlogCoverImage() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [blogImage, setBlogImage] = useState({ preview: "", raw: "" })

    const handleClick = () => {
        inputRef.current?.click()
    }
    const handleChange = (e: any) => {
        if (e.target.files.length) {
            setBlogImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

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
                {blogImage.preview ? (
                    <Image src={blogImage.preview} alt='blogImage' h='100%' w='100%' objectFit='fill' />
                ) : (<>

                    <Button
                        onClick={handleClick}
                        borderRadius='lg'
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
                    <input type="file" accept="image/*"
                        ref={inputRef} style={{ display: 'none' }}
                        onChange={handleChange}
                    />

                </>)
                }

            </Box>

        </>
    )
}
