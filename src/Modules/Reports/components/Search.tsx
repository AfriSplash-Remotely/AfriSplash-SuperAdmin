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

const Search = () => {
  return (
    <HStack bg="white" borderRadius="12px"
      py="0.5rem" width="60%"
      mb="3.5rem"
      boxShadow="0px 4px 8px 0px rgba(194, 194, 194, 0.20);"
    >
      <Box
        display="flex"
        width="50%"
        borderInlineEnd="1px"
        borderColor="gray.300"
        py='.4rem'
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
              <Text>country</Text>
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

export default Search;
