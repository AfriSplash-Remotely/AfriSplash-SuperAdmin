import { Menu, MenuButton, MenuItem, MenuList, Td, Tr } from "@chakra-ui/react";
import { CgMoreVertical } from "react-icons/cg";
import { TalentsTableBodyProps } from "./talents.interface";

export const TalentsTableBody = ({
  item,
  sendEmailModal,
  openUserDetails,
}: TalentsTableBodyProps): JSX.Element => {
  return (
    <>
      <Tr
        onClick={() => openUserDetails()}
        cursor="pointer"
        _hover={{ bgColor: "#F3FAF5", borderLeft: "0.2rem solid #0D5520" }}
      >
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.location}</Td>
        <Td>{item.profile}</Td>
        <Td>
          <Menu>
            <MenuButton>
              <CgMoreVertical />
            </MenuButton>
            <MenuList borderRadius="xl">
              <MenuItem
                _hover={{ background: "#D9DEDC", color: "primary" }}
                _active={{ background: "#D9DEDC", color: "primary" }}
                onClick={() => sendEmailModal()}
              >
                Send Email
              </MenuItem>
              <MenuItem
                _hover={{ background: "#D9DEDC", color: "primary" }}
                _active={{ background: "#D9DEDC", color: "primary" }}
              >
                Reset Password
              </MenuItem>
              <MenuItem
                color="#BE0000"
                _hover={{ background: "#FBDDDD", color: "#BE0000" }}
                _active={{ background: "#FBDDDD", color: "#BE0000" }}
              >
                Deactivate
              </MenuItem>
            </MenuList>
          </Menu>
        </Td>
      </Tr>
    </>
  );
};
