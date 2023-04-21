import { BoxProps, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export type { LinkItemProps, SidebarProps, MobileProps, NavItemProps };
