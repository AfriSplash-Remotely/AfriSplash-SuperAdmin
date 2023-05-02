import { Box } from "@chakra-ui/react";
import AddNewAdminButton from "./components/AddNewAdminButton";
import AdminTable from "./components/adminTable/AdminTable";

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
