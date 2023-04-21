import { MdOutlineDashboard, MdOutlineDomain, MdOutlineGroups2 } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiWechatLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { LinkItemProps } from ".";

const linkItems: Array<LinkItemProps> = [
  { name: "Dashboard", url: "/dashboard", icon: MdOutlineDashboard },
  { name: "Jobs", url: "/dashboard/jobs", icon: HiOutlineBriefcase },
  { name: "Companies", url: "/dashboard/companies", icon: MdOutlineDomain },
  { name: "Talents", url: "/dashboard/talents", icon: MdOutlineGroups2 },
  { name: "Forum", url: "/dashboard/forum", icon: RiWechatLine },
  { name: "Settings", url: "/dashboard/settings", icon: GoSettings },
];
export default linkItems;
