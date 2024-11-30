import * as React from "react";
import { useState } from "react";
import AppBarPetz from "../../commons/AppBar";
import colors from "../../theme/colors";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 201) {
        localStorage.setItem("jwtToken", response.data["access_token"]);
        if (email == "admin@gmail.com" && password == "admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        alert("Falha no login. Verifique suas credenciais.");
      }
    } catch (error) {
      alert("Erro ao fazer login. Tente novamente.");
      console.log(error);
    }
  };

  const handleNavigateToSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <Box>
        <AppBarPetz />
        <Box
          sx={{
            backgroundColor: colors.BackGround,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: "400px",
            }}
          >
            <Typography variant="h5" component="h1" sx={{ marginBottom: 2 }}>
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Senha"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              fullWidth
              onClick={handleLogin}
            >
              Entrar
            </Button>
            <Button
              variant="text"
              color="secondary"
              sx={{ marginTop: 1 }}
              fullWidth
              onClick={handleNavigateToSignUp}
            >
              Não tem uma conta? Cadastre-se
            </Button>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
