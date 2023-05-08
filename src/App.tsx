import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./Layout/Auth.layout";
import MainLayout from "@/Layout/Main.layout";
import SettingsLayout from "@/Layout/Settings.layout";

import Dashboard from "./Modules/Dashboard";
import Jobs from "./Modules/Jobs";
import Companies from "@/Modules/Companies";
import Forum from "@/Modules/Forum";
import SettingsProfile from "@/Modules/Settings";
import Login from "@/Modules/Login";
import ForgotPassword from "@/Modules/ForgotPassword";
import SettingsNotification from "@/Modules/Settings/Notification";
import SettingsPasswordReset from "@/Modules/Settings/PasswordReset";
import Admins from "@/Modules/Admins";
import InviteNewAdmin from "@/Modules/InviteNewAdmin";
import Talents from "@/Modules/Talents";

import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900-italic.css";
import "@fontsource/poppins/900.css";

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
          <Route path="talents" element={<Talents />} />
          <Route path="forum" element={<Forum />} />
          <Route path="admins" element={<Admins />} />
          <Route path="admins/invite-new-admin" element={<InviteNewAdmin />} />

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
