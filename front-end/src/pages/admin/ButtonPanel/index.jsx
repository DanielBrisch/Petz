import React from "react";
import { Box, Button } from "@mui/material";

const ButtonPanel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2, // Espaçamento entre os botões
        marginTop: 4,
      }}
    >
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          // Ação de excluir
          console.log("Excluir acionado");
        }}
      >
        Excluir
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          // Ação de editar
          console.log("Editar acionado");
        }}
      >
        Editar
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Ação de adicionar
          console.log("Adicionar acionado");
        }}
      >
        Adicionar
      </Button>
    </Box>
  );
};

export default ButtonPanel;
