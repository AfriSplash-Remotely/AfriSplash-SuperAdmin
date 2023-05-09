import React from 'react'
import { Box, Input, Flex, Spacer, Divider, Text, Button, Avatar } from "@chakra-ui/react"
import { BiFilter } from "react-icons/bi";
import { applicantAvatar, applicantSummary } from './applicantsData';

export default function LoadApplicants() {
    return (
        <Box py='2rem'>
            <Flex
                bg="white"
                borderRadius="xl"
                boxShadow="100"
                textAlign="center"
                alignItems="center"
                justifyContent='space-between'
                paddingX="1.8rem"
                h={{ base: "3.5rem", md: "3.5rem", lg: "3.438rem" }}
            >
                <Box display="flex" alignItems='center' justifyContent='center' gap={4} paddingX="1rem" paddingY="0.625rem">
                    <Text>Gender</Text>
                    <BiFilter />
                </Box>
                <Divider orientation="vertical" h="100%" />
                <Box display="flex" alignItems='center' justifyContent='center' gap={4} paddingX="1rem" paddingY="0.625rem">
                    <Text>Location</Text>
                    <BiFilter />
                </Box>
                <Divider orientation="vertical" h="100%" />
                <Box display="flex" alignItems='center' justifyContent='center' gap={4} paddingX="1rem" paddingY="0.625rem">
                    <Text>Degree</Text>
                    <BiFilter />
                </Box>
            </Flex>
            <Box display='flex' alignItems='center' gap={4} mt='2rem'>
                {applicantSummary.map((applicant) => (
                    <Button bg="primaryLight" color="primary">{applicant.title}</Button>
                ))}
            </Box>

            <Box mt='2rem'>
                {applicantAvatar.map((avatar) => (
                    <>
                        <Box display='flex' gap={4} alignItems='center' py='1rem'>
                            <Avatar name={avatar.name} src={avatar.src} />
                            <Text>{avatar.name}</Text>
                        </Box>
                        <Divider />
                    </>

                ))}
            </Box>
        </Box>
    )
}
