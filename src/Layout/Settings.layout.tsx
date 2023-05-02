import React from "react";
import { Outlet } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SettingsNav from "@/components/SettingNav";

function SettingsLayout(): JSX.Element {

    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <SettingsNav />
            <Box
                as="main"
                height="auto"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                overflow="visible"
                ml={{ base: 0, md: 60 }}
                padding="1.5rem"
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default SettingsLayout;
