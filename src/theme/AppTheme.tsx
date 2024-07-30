import { CssBaseline } from "@mui/material";
import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./index";

export interface IAppThemeProps {
  children: React.ReactNode;
}

export const AppTheme: FunctionComponent<IAppThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
