import React, { useEffect, useState } from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";
const dflex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
function Nav(): JSX.Element {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const pathnames = location.pathname.split("/");
    const title = pathnames[pathnames.length - 1];
    setPageTitle(title);
  }, [location]);

  return (
    <Box {...dflex} paddingBottom="1.5rem" width="100%">
      <Box textTransform="capitalize" fontSize="2rem">
        {pageTitle}
      </Box>

      <Box {...dflex} gap="2rem">
        <Box>
          <MdOutlineNotificationsNone size={24} />
        </Box>
        <Box
          {...dflex}
          gap="1rem"
          padding="0.6rem"
          borderRadius="lg"
          boxShadow="50"
          textAlign="center"
          alignItems="center"
        >
          <Avatar src="Super Admin" size="sm" />
          <Text as="span">Super Admin</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
