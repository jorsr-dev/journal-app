import { LogoutOutlined, MenuOpenOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import * as React from "react";

export interface INavBarProps {
  drawerWidth: Number;
}

export const NavBar: React.FunctionComponent<INavBarProps> = ({
  drawerWidth,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuOpenOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between">
          <Typography variant="h6">Journa App</Typography>
          <IconButton color="inherit">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
