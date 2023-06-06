import {
  MdOutlineDashboard,
  MdOutlineDomain,
  MdOutlineGroups2,
  MdOutlineGroups3
} from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiWechatLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { LinkItemProps } from ".";

const linkItems: Array<LinkItemProps> = [
  { name: "Dashboard", url: "/dashboard", icon: MdOutlineDashboard },
  { name: "Jobs", url: "/dashboard/jobs", icon: HiOutlineBriefcase },
  { name: "Companies", url: "/dashboard/companies", icon: MdOutlineDomain },
  { name: "Talents", url: "/dashboard/talents", icon: MdOutlineGroups2 },
  { name: "Reports", url: "/dashboard/reports", icon: MdOutlineGroups3 },
  { name: "Forum", url: "/dashboard/forum", icon: RiWechatLine },
  { name: "Admins", url: "/dashboard/admins", icon: VscSettings },
  { name: "Settings", url: "/dashboard/settings", icon: IoSettingsOutline },
];
export default linkItems;
