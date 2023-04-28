import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/react";
import settingsLinkItems from "./links";

function SettingsNav(): JSX.Element {
  return (
    <Box
      display="flex"
      bg="#F6F6F6"
      borderRadius="0.75rem"
      boxShadow={100}
      borderWidth="0.25rem"
      borderColor="white"
      overflow="hidden"
      minWidth="max-content"
      width={{ base: "100%", md: "50%", xl: "40%" }}
      marginX="auto"
    >
      {settingsLinkItems.map((link) => {
        return (
          <Link
            key={link.name}
            as={RouterLink}
            to={`${link.url}`}
            textDecoration="none"
            paddingX="1rem"
            paddingY="0.625rem"
            width="100%"
            textAlign="center"
            _hover={{ textDecoration: "none" }}
            _activeLink={{ bg: "white" }}
            _focus={{ boxShadow: "none" }}
            end={true}
          >
            {link.name}
          </Link>
        );
      })}
    </Box>
  );
}

export default SettingsNav;
