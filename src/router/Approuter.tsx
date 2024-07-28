import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";

interface IAppRouterProps {}

export const AppRouter: FunctionComponent<IAppRouterProps> = (props) => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="*" element={<JournalRoutes />} />
    </Routes>
  );
};

export default AppRouter;
