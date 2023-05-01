import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./Layout/Auth.layout";
import MainLayout from "@/Layout/Main.layout";
import SettingsLayout from "@/Layout/Settings.layout";

import Dashboard from "./Modules/Dashboard";
import Jobs from "./Modules/Jobs";
import Companies from "./Modules/Companies";
import Forum from "./Modules/Forum";
import SettingsProfile from "./Modules/Settings";
import Login from "@/Modules/Login";
import ForgotPassword from "@/Modules/ForgotPassword";
import SettingsNotification from "@/Modules/Settings/Notification";
import SettingsPasswordReset from "@/Modules/Settings/PasswordReset";

import "@fontsource/inter";
import Admins from "./Modules/Admins";
import InviteNewAdmin from "./Modules/Admins/components/invite_new_admin";

// SettingsLayout
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" index element={<Login />} />
          <Route path="forgot-password" index element={<ForgotPassword />} />
        </Route>

        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="" index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="companies" element={<Companies />} />
          <Route path="forum" element={<Forum />} />
          <Route path="admins" element={<Admins />} />
          <Route path="admins/invite_new_admin" element={<InviteNewAdmin />} />

          <Route path="settings" element={<SettingsLayout />}>
            <Route path="" element={<SettingsProfile />} />
            <Route path="password-reset" element={<SettingsPasswordReset />} />
            <Route path="notification" element={<SettingsNotification />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
