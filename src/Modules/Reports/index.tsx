import React from "react";
import {
  Box,
  Textarea,
  HStack,
  Text,
  Center,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
  TableContainer,
  Table,
  Tbody,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import Hero from "./components/Hero";
import ReportTableHeader from "./components/ReportTableHeader";
import { reportInfo } from "./components/reportTableData";
import ReportTableBody from "./components/ReportTableBody";
import { ReportTableInfo } from "./components/reports.interface";
import ReportModal from "./components/ReportModal";

function Reports(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Hero />
      <Box
        shadow="100"
        borderRadius="1rem"
        overflow="hidden"
        mt={{ base: "1rem", md: "1.5rem", lg: "3rem" }}
      >
        <TableContainer bgColor="white">
          <Table size="lg" variant="simple">
            <ReportTableHeader />
            <Tbody>
              {reportInfo.map((item: ReportTableInfo) => {
                return <ReportTableBody onOpen={onOpen} item={item} key={item.FullName} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <ReportModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}

export default Reports;
