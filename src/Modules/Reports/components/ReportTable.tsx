import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import { CgMoreVertical } from "react-icons/cg";

const dflex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

type ReportInfo = {
  FullName: string;
  Type: string;
  Resolved: string;
  Location: string;
  action: any;
};

const ReportInfo: ReportInfo[] = [
  {
    FullName: "Bessie Cooper",
    Type: "Job",
    Resolved: "Unresolved",
    Location: "Nigeria",
    action: <AiOutlineMore />,
  },
  {
    FullName: "Bessie Cooper",
    Type: "Job",
    Resolved: "Unresolved",
    Location: "Nigeria",
    action: <AiOutlineMore />,
  },
  {
    FullName: "Bessie Cooper",
    Type: "Job",
    Resolved: "Unresolved",
    Location: "Nigeria",
    action: <AiOutlineMore />,
  },

  {
    FullName: "Bessie Cooper",
    Type: "Job",
    Resolved: "Unresolved",
    Location: "Nigeria",
    action: <AiOutlineMore />,
  },
  {
    FullName: "Bessie Cooper",
    Type: "Job",
    Resolved: "Unresolved",
    Location: "Nigeria",
    action: <AiOutlineMore />,
  },
];

function ReportTable(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box boxShadow="100" borderRadius="xl" overflow="hidden" bg="white">
      <TableContainer>
        <Table variant="simple">
          <Thead bg="primary">
            <Tr>
              <Th color="white" padding="1.5rem">
                Company
              </Th>
              <Th color="white" padding="1.5rem">
                Job Title
              </Th>
              <Th color="white" padding="1.5rem">
                Location
              </Th>
              <Th color="white" padding="1.5rem">
                Status
              </Th>
              <Th color="white" textAlign="right" padding="1.5rem">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* onClick={onOpen} */}

            {ReportInfo.map((details, index) => {
              const { FullName, Type, Resolved, Location, action } = details;
              return (
                <>
                  <Tr
                  key={index}
                  padding="2"
                  cursor="pointer"
                  borderTop="1px solid #D9DEDC"
                  bg="#FFFFFF"
                  borderLeft="3px solid transparent"
                  _hover={{
                    bg: "#F3FAF5",
                    color: "primary",
                    borderLeft: "3px solid #0D5520",
                    transition: ".3s ease-in-out",
                  }}
                  _active={{
                    bg: "#F3FAF5",
                    color: "primary",
                    borderLeft: "3px solid #0D5520",
                  }}
                >
                    <Td onClick={onOpen}>{FullName}</Td>
                    <Td onClick={onOpen}>{Type}</Td>
                    <Td onClick={onOpen}>{Resolved}</Td>
                    <Td onClick={onOpen}>{Location}</Td>

                  <Td textAlign="right">
                    <Menu>
                      <MenuButton>
                        <CgMoreVertical />
                      </MenuButton>
                      <MenuList borderRadius="xl">
                        <MenuItem
                          _hover={{ background: "#D9DEDC", color: "primary" }}
                          _active={{ background: "#D9DEDC", color: "primary" }}
                        >
                          Accept
                        </MenuItem>
                        <MenuItem
                          _hover={{ background: "#D9DEDC", color: "primary" }}
                          _active={{ background: "#D9DEDC", color: "primary" }}
                        >
                          Reject
                        </MenuItem>
                        <MenuItem
                          _hover={{ background: "#D9DEDC", color: "primary" }}
                          _active={{ background: "#D9DEDC", color: "primary" }}
                        >
                          Archive
                        </MenuItem>
                        <MenuItem
                          _hover={{ background: "#D9DEDC", color: "primary" }}
                          _active={{ background: "#D9DEDC", color: "primary" }}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                  </Tr>
                </>
              );
            })}

          </Tbody>
        </Table>

      </TableContainer>
      {/* <Box>
        <JobDetails isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Box> */}


      <Box paddingTop="5" paddingBottom="4">
        <Flex justifyContent="center" gap="4">
          <Button
            bg="transparent"
            color="black"
            borderRadius="6px"
            border="1px solid #D9DEDC"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
          >
            FIRST
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            PREV
            <Box>
              <BiSkipPrevious />
            </Box>
          </Button>

          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            {1}
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            {2}
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            {3}
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            {4}
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            {5}
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            NEXT
            <Box>
              <BiSkipNext />
            </Box>
          </Button>
          <Button
            bg="transparent"
            color="black"
            paddingRight="5"
            paddingLeft="5"
            size="sm"
            borderRadius="6px"
            border="1px solid #D9DEDC"
          >
            LAST
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default ReportTable;
