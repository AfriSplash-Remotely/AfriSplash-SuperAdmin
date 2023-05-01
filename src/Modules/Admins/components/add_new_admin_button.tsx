import { Box, Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AddNewAdminButton = (): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard/admins/invite-new-admin");
  };
  return (
    <Box
      pt={{ base: "1rem", md: "2rem", lg: "2.813rem" }}
      pb={{ base: "1rem", md: "1rem", lg: "1.313rem" }}
      display="flex"
      justifyContent="right"
    >
      <Button
        _hover={{ bgColor: "primary" }}
        _active={{ bgColor: "primary" }}
        borderRadius=".5rem"
        rightIcon={<FiPlus />}
        px={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
        py="1rem"
        onClick={handleNavigate}
      >
        Add Admin
      </Button>
    </Box>
  );
};

export default AddNewAdminButton;
