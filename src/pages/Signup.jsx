import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import { Button, TextField, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/sign.css';

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
      <Container className='container' maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Surname"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
          <p className="">Already have an account?<Link to="/">Sign In</Link></p>
        </form>
      </Container>
    </AppProvider>
  );
}
