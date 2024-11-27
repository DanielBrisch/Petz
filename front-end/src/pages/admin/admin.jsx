import React from "react";
import { Container, Typography } from "@mui/material";
import ButtonPanel from "./ButtonPanel";

const AdminPage = () => {
  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Página de Gerenciamento
      </Typography>
      <ButtonPanel />
    </Container>
  );
};

export default AdminPage;
