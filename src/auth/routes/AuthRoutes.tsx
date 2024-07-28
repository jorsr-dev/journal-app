import * as React from "react";
import { Navigate, Route, Routes } from "react-router";
import { LoginPage, RegisterPage } from "../pages";

export interface IAuthRoutesProps {}

export const AuthRoutes: React.FunctionComponent<IAuthRoutesProps> = (
  props
) => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
