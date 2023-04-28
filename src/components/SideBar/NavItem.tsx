import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { FlexProps, Flex, Icon, Link, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  url: string;
  children: React.ReactNode;
}
export default function NavItem({ icon, children, url, ...rest }: NavItemProps) {
  return (
    <Box marginBottom="1.5rem">
      <Link
        as={RouterLink}
        to={`${url}`}
        display="block"
        textDecoration="none"
        color="gray.600"
        borderRadius="md"
        cursor="pointer"
        _hover={{
          bg: "primaryLight",
          color: "primary",
          textDecoration: "none",
        }}
        _focus={{ boxShadow: "none" }}
        _activeLink={{ bg: "primary", color: "primaryLight" }}
        end={true}
        role="group"
      >
        <Flex align="center" paddingX="1rem" paddingY="0.6rem" {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="1.5rem"
              as={icon}
              _groupHover={{ color: "primary" }}
              _activeLink={{ color: "primaryLight" }}
            />
          )}

          {children}
        </Flex>
      </Link>
    </Box>
  );
}
