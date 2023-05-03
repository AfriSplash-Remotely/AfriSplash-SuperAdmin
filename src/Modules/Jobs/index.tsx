import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Input,
  Flex,
  Spacer,
  //   Popover,
  // PopoverTrigger,
  // PopoverContent,
  // PopoverHeader,
  // PopoverBody,
  // PopoverFooter,
  // PopoverArrow,
  // PopoverCloseButton,
  // PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import Select from "react-select";
import { BiFilter, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import "@fontsource/actor";

const jobType = [
  { value: "fullTime", label: "Full Time" },
  { value: "remote", label: "Remote" },
  { value: "contract", label: "Contract" },
];

const salary = [
  { value: "High", label: "$200k" },
  { value: "Medium", label: "$100k" },
  { value: "Low", label: "$50k" },
];

const date = [
  { value: "High", label: "$200k" },
  { value: "Medium", label: "$100k" },
  { value: "Low", label: "$50k" },
];

const dflex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

type JobInfo = {
  companyName: string;
  title: string;
  location: string;
  status: string;
  action: string;
};

const JobInfo: JobInfo[] = [
  {
    companyName: "Bessie Cooper",
    title: "Admin",
    location: "Angola",
    status: "Active",
    action: <AiOutlineMore className="ml-auto" />,
  },
  {
    companyName: "Annette Black",
    title: "Blog Editor",
    location: "South Africa",
    status: "Offline",
    action: <AiOutlineMore className="ml-auto" />,
  },
  {
    companyName: "Savannah Nguyen",
    title: "Recruiter",
    location: "Kenya",
    status: "Active",
    action: <AiOutlineMore className="ml-auto" />,
  },

  {
    companyName: "Kathryn Murphy",
    title: "Recruiter",
    location: "Ghana",
    status: "Offline",
    action: <AiOutlineMore className="ml-auto" />,
  },
  {
    companyName: "Marvin McKinney",
    title: "Blog Editor",
    location: "Remote",
    status: "Revoked",
    action: <AiOutlineMore className="ml-auto" />,
  },
];

const Actions = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

function TableContent(): JSX.Element {
  return (
    <Box
      boxShadow="200"
      borderRadius="lg"
    >
      <TableContainer
        className="rounded-[1rem]"
        paddingTop="2"
      >
        <Table
          variant="simple"
        >
          <Thead className="bg-green-600 ">
            <Tr>
              <Th
                color="white"
                fontSize="14"
                fontFamily={"Actor"}
              >
                Company
              </Th>
              <Th
                color="white"
                fontSize="14"
                fontFamily={"Actor"}
              >
                Job Title
              </Th>
              <Th
                color="white"
                fontSize="14"
                fontFamily={"Actor"}
              >
                Location
              </Th>
              <Th
                color="white"
                fontSize="14"
                fontFamily={"Actor"}
              >
                Status
              </Th>
              <Th
                color="white"
                fontSize="14"
                fontFamily={"Actor"}
                textAlign="right"
              >
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {JobInfo.map((details, index) => {
              const { companyName, title, location, status, action } = details;
              return (
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
                  <Td>{companyName}</Td>
                  <Td>{title}</Td>
                  <Td>{location}</Td>
                  <Td>{status}</Td>
                  <Td
                    marginLeft="auto"
                    onClick={() => Actions()}
                  >
                    {action}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Box
        paddingTop="5"
        paddingBottom="4"
      >
        <Flex
          justifyContent="center"
          gap="4"
        >
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

function Jobs(): JSX.Element {
  return (
    <>
      <Box className="pt-[3rem]">
        <Box className="flex shrink-0 grow-0">
          <Flex
            borderRadius="lg"
            boxShadow="50"
            textAlign="center"
            alignItems="center"
            className="mr-8 gap-2 p-3"
          >
            <Box
              borderRight="1px solid lightgray"
              paddingRight="1"
            >
              <Input
                placeholder="Company"
                width="auto"
                display="block"
                className="bg-slate-400"
              />
            </Box>

            <Box
              borderRight="1px solid lightgray"
              paddingRight="1"
            >
              <Input
                placeholder="Location"
                width="auto"
                display="block"
              />
            </Box>

            <Box
              borderRight="1px solid lightgray"
              paddingRight="1"
            >
              <Select
                options={jobType}
                placeholder="Date posted"
                className={"text-sm "}
              />
            </Box>

            <Box
              borderRight="1px solid lightgray"
              paddingRight="1"
            >
              <Select
                options={salary}
                placeholder="Salary"
                className={"text-sm "}
              />
            </Box>

            <Select
              options={salary}
              placeholder="Job Type"
              className={"text-sm "}
            />
          </Flex>
          <Spacer />
          <Box
            className="self-center"
            gap="1rem"
            padding="0.6rem"
            borderRadius="lg"
            boxShadow="50"
            textAlign="center"
            alignItems="center"
          >
            <div className="flex justify-between items-center gap-2 px-4 ">
              <BiFilter />
              <p>Filters</p>
            </div>
          </Box>
        </Box>
      </Box>

      <Box marginTop="10">
        <TableContent />
      </Box>
    </>
  );
}

export default Jobs;
