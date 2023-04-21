import { Box, Flex, Image, CloseButton, useColorModeValue, Button } from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import { NavItem, SidebarProps, linkItems } from "./index";
import { MdLogout } from "react-icons/md";

export default function SidebarContent({ onClose, ...rest }: SidebarProps): JSX.Element {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      height="100%"
      pos="fixed"
      paddingX="2rem"
      paddingY="1rem"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" mb="4rem">
        <Box>
          <Image src={logo} />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
      <Box>
        <Button
          leftIcon={<MdLogout />}
          variant="secondary"
          // color="#F7534A"
          // bg="white"
          position="absolute"
          bottom={"2.5rem"}
          left="50%"
          transform="translateX(-50%)"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
