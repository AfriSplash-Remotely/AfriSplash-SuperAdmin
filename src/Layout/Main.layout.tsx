import React from "react";
import { Outlet } from "react-router-dom";
import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { SidebarContent } from "@/components/SideBar";
import Nav from "@/components/Nav";

function MainLayout(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />

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
        <Nav />
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
