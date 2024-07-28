import * as React from "react";
import { Navigate, Route, Routes } from "react-router";
import { JournalPage } from "../pages";

export interface IJournalRoutesProps {}

export const JournalRoutes: React.FunctionComponent<IJournalRoutesProps> = (
  props
) => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
