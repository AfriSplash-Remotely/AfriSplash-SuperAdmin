import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./Layout/Auth.layout";
import MainLayout from "@/Layout/Main.layout";

import Dashboard from "./Modules/Dashboard";
import Jobs from "./Modules/Jobs";
import Forum from "./Modules/Forum";
import Settings from "./Modules/Settings";
import Login from "./Modules/Login";
import ForgotPassword from "./Modules/ForgotPassword";
import "@fontsource/inter";

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
          <Route path="forum" element={<Forum />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
