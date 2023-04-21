import { FlexProps, Flex, Icon, Link, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  url: string;
  children: React.ReactNode;
}
export default function NavItem({ icon, children, url, ...rest }: NavItemProps) {
  return (
    <Box marginBottom="1.5rem">
      <Link href={`${url}`} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          paddingX="1rem"
          paddingY="0.6rem"
          borderRadius="md"
          role="group"
          color="gray.600"
          cursor="pointer"
          _hover={{
            bg: "primaryLight",
            color: "primary",
          }}
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="1.5rem" color="gray.500" as={icon} _groupHover={{ color: "primary" }} />}

          {children}
        </Flex>
      </Link>
    </Box>
  );
}
