import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import { Button, TextField, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../utils/styles/sign.css';

// Fonction pour simuler l'inscription
const signUp = async (formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      alert(
        `Inscription avec les données : 
        Nom: ${formData.get('name')}, 
        Email: ${formData.get('email')}, 
        Mot de passe: ${formData.get('password')}`
      );
      resolve();
    }, 300);
  });
  return promise;
};

export default function SignUpPage() {
  const theme = useTheme();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    signUp(formData);
  };

  return (
    <AppProvider theme={theme}>
      <Container className='container' maxWidth="xs">
        <Typography className='title-Sign' variant="h4" gutterBottom>
          Sign in
        </Typography>
        <p className='introduction'>Welcome,to your music's world</p>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <p className="">Don't have any account? <Link className='link' to="/signup">Sign Up</Link></p>
        </form>
      </Container>
    </AppProvider>
  );
}
