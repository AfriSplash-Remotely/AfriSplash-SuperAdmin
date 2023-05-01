import { Box } from "@chakra-ui/react";
import AddNewAdminButton from "./components/add_new_admin_button";
import AdminTable from "./components/adminTable/admin_table";

const Admins = (): JSX.Element => {
  return (
    <>
      <Box overflow="hidden">
        <AddNewAdminButton />
        <AdminTable />
      </Box>
    </>
  );
};

export default Admins;
