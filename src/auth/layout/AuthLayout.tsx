import { Grid, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

export interface IAuthLayoutProps {
  children: ReactNode;
  title: string;
}

export const AuthLayout: FunctionComponent<IAuthLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
    >
      <Grid
        item
        xs={3}
        sx={{
          width: { xs: "95%", sm: "50%" },
          backgroundColor: "background.paper",
          borderRadius: 1,
          p: 3,
          textAlign: "center",
        }}
      >
        <Typography variant={"h4"}>{title}</Typography>

        {children}
      </Grid>
    </Grid>
  );
};
