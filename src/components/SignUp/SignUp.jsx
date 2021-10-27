import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { connect } from 'react-redux';
import { registerTHC } from '../../redux/reducers/authReducer';

const SignUp = ({onSignUp}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [verifiedPassword, setVerifiedPassword] = useState('')

    return (
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={e => e.preventDefault()} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  name="login"
                  autoFocus
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordVerify"
                  label="Verify Password"
                  type="password"
                  id="passwordVerify"
                  helperText="Passwords must match."
                  value={verifiedPassword}
                  onChange={(e) => setVerifiedPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={password !== verifiedPassword}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => onSignUp(login, password)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    )
}

export default connect(null, {onSignUp: registerTHC})(SignUp);