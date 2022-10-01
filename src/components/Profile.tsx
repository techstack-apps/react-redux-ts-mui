import { ReactElement, FC } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Profile: FC<any> = (props): ReactElement => {
  const { auth } = props
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          {auth && auth.data && <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  InputProps={{
                    readOnly: true,
                  }}
                  value={auth.data.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={auth.data.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={auth.data.surname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  id="city"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={auth.data.city}
                />
              </Grid>
            </Grid>
          </Box>}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;