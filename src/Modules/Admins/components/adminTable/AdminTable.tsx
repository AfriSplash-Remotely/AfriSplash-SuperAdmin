import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import { AdminTableData } from "./AdminTableData";
import { AdminTableHeader } from "./AdminTableHeader";
import { AdminTableBody } from "./AdminTableBody";
import { IAdminTableResponsePayload } from "./admin.interface";

const AdminTable = (): JSX.Element => {
  return (
    <>
      <TableContainer bgColor="white" borderRadius="1rem">
        <Table size="lg" variant="simple">
          <AdminTableHeader />
          <Tbody>
            {AdminTableData.map((item: IAdminTableResponsePayload) => {
              return <AdminTableBody item={item} key={item.name} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminTable;
