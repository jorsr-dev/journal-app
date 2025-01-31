import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { AuthLayout } from "../layout";

export interface ILoginPageProps {}

export const LoginPage: FunctionComponent<ILoginPageProps> = (props) => {
  return (
    <AuthLayout title={"Login"}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"Email"}
              fullWidth
              type="email"
              placeholder="mail@mail.com"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label={"Password"} fullWidth type="password" />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <Button variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
