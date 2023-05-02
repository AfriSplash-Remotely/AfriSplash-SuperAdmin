import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";

const InviteNewAdmin = (): JSX.Element => {
  const UsersPermissionData: Array<{ permission: string }> = [
    {
      permission: "Manage jobs access",
    },
    {
      permission: "Forum access",
    },
    {
      permission: "Blog access",
    },
    {
      permission: "Manage deals",
    },
  ];
  return (
    <>
      <Box
        mt={{ base: "1rem", md: "2rem", lg: "3rem" }}
        w={{ base: "100%", md: "100%", lg: "48.438rem" }}
        bgColor="white"
        borderRadius="xl"
        as="form"
      >
        <FormControl>
          <Box p={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}>
            <Box>
              <FormLabel color="#1F211D">Email address</FormLabel>
              <Input
                type="email"
                borderRadius="lg"
                bgColor="#F8F8F8"
                borderColor="none"
              />
            </Box>
            <Box pt={{ base: "1rem", md: "1.2rem", lg: "1.75rem" }}>
              <FormLabel color="#1F211D">Password</FormLabel>
              <Input
                type="password"
                borderRadius="lg"
                bgColor="#F8F8F8"
                borderColor="none"
              />
            </Box>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Box p={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}>
            <Box pt={{ base: "1rem", md: ".5rem", lg: "1.5rem" }}>
              <Text fontSize={{ base: "1.2rem", md: "1.25rem", lg: "1.75rem" }}>
                Manage users permission
              </Text>
              <HStack
                spacing={3}
                mt={{ base: "1rem", md: ".8rem", lg: ".8rem" }}
              >
                <Checkbox size="lg" />
                <Text>Select all</Text>
              </HStack>
              <Box
                mt={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
                display="flex"
                flexDir="column"
                gap="1rem"
              >
                {UsersPermissionData.map((permission) => {
                  return (
                    <Box
                      w="100%"
                      bgColor="#F8F8F8"
                      py={{ base: ".5rem", md: ".6rem", lg: ".75rem" }}
                      px={{ base: ".5rem", md: ".6rem", lg: ".75rem" }}
                      borderRadius="lg"
                      key={permission.permission}
                    >
                      <HStack spacing={3}>
                        <Checkbox size="lg" bgColor="white" />
                        <Text>{permission.permission}</Text>
                      </HStack>
                    </Box>
                  );
                })}
                <Box>
                  <Button
                    borderRadius="lg"
                    _hover={{ bgColor: "primary" }}
                    _active={{ bgColor: "primary" }}
                    px={{ lg: "1.5rem" }}
                    size={{ base: "md", md: "md", lg: "md" }}
                  >
                    Invite
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default InviteNewAdmin;
