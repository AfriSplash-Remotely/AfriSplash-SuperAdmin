interface ISettingsLinkItem {
  name: string;
  url: string;
}

const settingsLinkItems: Array<ISettingsLinkItem> = [
  { name: "Profile", url: "/dashboard/settings" },
  { name: "Reset Password", url: "/dashboard/settings/password-reset" },
  { name: "Notification Settings", url: "/dashboard/settings/notification" },
];
export default settingsLinkItems;

export type { ISettingsLinkItem };
