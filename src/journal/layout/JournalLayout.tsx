import { Box, Toolbar } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { NavBar, SideBar } from "../components";

export interface IJournalLayoutProps {
  children: ReactNode;
}

const drawerWidth: Number = 240;

export const JournalLayout: FunctionComponent<IJournalLayoutProps> = ({
  children,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component={"main"} sx={{ flexGrow: 1, padding: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
