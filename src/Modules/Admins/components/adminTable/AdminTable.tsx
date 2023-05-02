import { Table, TableContainer, Tbody, Box } from "@chakra-ui/react";
import { AdminTableData } from "./AdminTableData";
import { AdminTableHeader } from "./AdminTableHeader";
import { AdminTableBody } from "./AdminTableBody";
import { IAdminTableResponsePayload } from "./admin.interface";

const AdminTable = (): JSX.Element => {
  return (
    <Box shadow="100" borderRadius="1rem" overflow="hidden">
      <TableContainer bgColor="white">
        <Table size="lg" variant="simple">
          <AdminTableHeader />
          <Tbody>
            {AdminTableData.map((item: IAdminTableResponsePayload) => {
              return <AdminTableBody item={item} key={item.name} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminTable;
