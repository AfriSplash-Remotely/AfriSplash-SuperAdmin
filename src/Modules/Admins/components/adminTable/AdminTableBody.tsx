import { Menu, MenuButton, MenuItem, MenuList, Td, Tr } from "@chakra-ui/react";
import { CgMoreVertical } from "react-icons/cg";
import {
  AdminTableBodyProps,
  IAdminTableResponsePayload,
} from "./admin.interface";

export const AdminTableBody = ({ item }: AdminTableBodyProps): JSX.Element => {
  return (
    <>
      <Tr _hover={{ bgColor: "#F3FAF5", borderLeft: "0.2rem solid #0D5520" }}>
        <Td>{item.name}</Td>
        <Td>{item.permission}</Td>
        <Td>{item.status}</Td>
        <Td>
          <Menu>
            <MenuButton>
              <CgMoreVertical />
            </MenuButton>
            <MenuList borderRadius="xl">
              <MenuItem
                _hover={{ background: "#D9DEDC", color: "primary" }}
                _active={{ background: "#D9DEDC", color: "primary" }}
              >
                Revoke access
              </MenuItem>
              <MenuItem
                _hover={{ background: "#D9DEDC", color: "primary" }}
                _active={{ background: "#D9DEDC", color: "primary" }}
              >
                Update access
              </MenuItem>
              <MenuItem
                _hover={{ background: "#D9DEDC", color: "primary" }}
                _active={{ background: "#D9DEDC", color: "primary" }}
              >
                Remove user
              </MenuItem>
            </MenuList>
          </Menu>
        </Td>
      </Tr>
    </>
  );
};
