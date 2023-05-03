import React from 'react'
import {
    Box,
    Text,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Divider
} from '@chakra-ui/react'

interface JobDetailsProps {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export default function JobDetails({ isOpen, onClose }: JobDetailsProps): JSX.Element {
    return (
        <Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size="sm"
            >
                <DrawerOverlay bg="rgba(0, 0, 0, 0.2)" />
                <DrawerContent>
                    <DrawerHeader color="#000000" fontSize='xl'>Front End Developer</DrawerHeader>
                    <DrawerBody>
                        <Text >Ideal Syntax</Text>
                        <Box mt='4rem' display='flex' gap={8} alignItems='center'>
                            <Text>Job Type</Text>
                            <Button bg="primaryLight" color="primary" px='1rem'>Full Time</Button>
                            <Button bg="primaryLight" color="primary" px='1rem'>Remote</Button>
                        </Box>
                        <Divider pt='1rem' />
                        <Box py='2rem'>
                            <Text fontWeight={400}>Job Description</Text>
                            <Text mt='2rem' lineHeight='24px'>
                                Lorem ipsum dolor sit amet consectetur. Amet ligula non massa sit ultrices metus dolor posuere.
                                Nec ullamcorper nunc ullamcorper nunc. Arcu amet quisque ac commodo. Consectetur est ullamcorper
                                nisi in donec aliquam. Malesuada nisi dictum quis integer faucibus odio est aliquet tellus. Eu
                                tristique posuere nibh id quis non ut. Diam aliquam nulla interdum auctor. Quis metus dignissim eget nunc.
                                Tortor proin lectus tristique condimentum. Elit at sed mattis fusce proin. Sed nec hendrerit
                                euismod aliquam. Faucibus a tellus rhoncus ipsum pretium non adipiscing.
                                Nam aliquet iaculis posuere cursus tortor. Mauris elit quam non etiam a.

                            </Text>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between' py='2rem'>
                            <Text color="#8C8C8C">1st, April 2023</Text>
                            <Button size='md' variant='secondary'  >Load Applicants</Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
