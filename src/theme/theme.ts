import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
    error: {
      main: red.A400,
    },
  },
});
