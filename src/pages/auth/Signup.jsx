import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useTheme } from "@mui/material/styles";
import { Button, TextField, Typography, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import "../../utils/styles/sign.css";

export default function SignUpPage() {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="container" maxWidth="xs">
      <Typography className="title-Sign" variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <p className="introduction">Welcome to your music's world</p>
      {error && <Typography color="error">{error}</Typography>}
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
          Sign Up
        </Button>
        <p>
          Already have an account? <Link className="link" to="/">Sign In</Link>
        </p>
      </form>
    </Container>
  );
}
