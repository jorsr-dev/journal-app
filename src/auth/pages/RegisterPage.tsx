import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

export interface IRegisterPageProps {}

export const RegisterPage: FunctionComponent<IRegisterPageProps> = (props) => {
  return (
    <AuthLayout title={"Crear una cuenta"}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"Nombre compoleto"}
              fullWidth
              type="text"
              placeholder="mail@mail.com"
            />
          </Grid>

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
          <Grid item xs={12} sm={12}>
            <Button variant="contained" fullWidth>
              Register
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth">
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
