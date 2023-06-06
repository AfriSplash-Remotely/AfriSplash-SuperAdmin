import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Hero = () => {
  return (
    <HStack bg="white" borderRadius="md" py="0.3rem" width="60%" mb="3.5rem">
      <Box
        display="flex"
        width="50%"
        borderInlineEnd="1px"
        borderColor="gray.300"
      >
        <Menu>
          <MenuButton mx="auto" as={Text}>
            <Box
              fontSize=".8rem"
              fontWeight={700}
              display="flex"
              alignItems="center"
              gap="2rem"
            >
              <Text>Type</Text>
              <Box>
                <AiFillCaretDown />
              </Box>
            </Box>
          </MenuButton>

          <MenuList>
            <MenuItem>lorem</MenuItem>
            <MenuItem>ipsum</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box display="flex" ml="auto" width="50%">
        <Menu>
          <MenuButton mx="auto" as={Text}>
            <Box
              fontSize=".8rem"
              fontWeight={700}
              display="flex"
              alignItems="center"
              gap="2rem"
            >
              <Text>Company</Text>
              <Box>
                <AiFillCaretDown />
              </Box>
            </Box>
          </MenuButton>

          <MenuList>
            <MenuItem>lorem</MenuItem>
            <MenuItem>ipsum</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Hero;
