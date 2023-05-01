import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import { AdminTableData } from "./admin_table_data";
import { AdminTableHeader } from "./admin_table_header";
import { AdminTableBody } from "./admin_table_body";
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
