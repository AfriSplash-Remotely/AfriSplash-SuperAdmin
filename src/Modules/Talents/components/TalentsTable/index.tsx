import {
  Box,
  Table,
  TableContainer,
  Tbody,
  useDisclosure,
} from "@chakra-ui/react";
import { TalentsTableHeader } from "./TalentsTableHeader";
import { TalentsTableData } from "./TalentsTableData";
import { ITalentsTableResponsePayload } from "./talents.interface";
import { TalentsTableBody } from "./TalentsTableBody";
import { TalentsTableFooter } from "./TalentsTableFooter";
import { SendEmailModal } from "./SendEmailModal";
import TalentsDetailsDrawer from "../TalentsDetailsDrawer";

const TalentsTable = (): JSX.Element => {
  const sendEmailModal = useDisclosure();
  const talentsDetailsDrawer = useDisclosure();
  return (
    <Box
      shadow="100"
      borderRadius="1rem"
      overflow="hidden"
      mt={{ base: "1rem", md: "1.5rem", lg: "3rem" }}
    >
      <TableContainer bgColor="white">
        <Table size="lg" variant="simple">
          <TalentsTableHeader />
          <Tbody>
            {TalentsTableData.map((item: ITalentsTableResponsePayload) => {
              return (
                <TalentsTableBody
                  item={item}
                  key={item.name}
                  sendEmailModal={sendEmailModal.onOpen}
                  openUserDetails={talentsDetailsDrawer.onOpen}
                />
              );
            })}
          </Tbody>
        </Table>
        <TalentsTableFooter />
      </TableContainer>
      <SendEmailModal
        isOpen={sendEmailModal.isOpen}
        onClose={sendEmailModal.onClose}
      />
      <TalentsDetailsDrawer
        isOpen={talentsDetailsDrawer.isOpen}
        onClose={talentsDetailsDrawer.onClose}
      />
    </Box>
  );
};

export default TalentsTable;
