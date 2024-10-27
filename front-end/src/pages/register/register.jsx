import * as React from "react";
import RegisterAppBar from "./AppBar/index";
import { Box, Typography } from "@mui/material";
import ContainerRegister from "./ContainerRegister";
import colors from "../../theme/colors";

export default function Register() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <RegisterAppBar />
        <Box
          sx={{
            backgroundColor: colors.BackGround,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 5,
            pb: 5,
          }}
        >
          <ContainerRegister />
          <div style={{ width: "4em" }}></div>
          <Box>
            <Typography sx={{ fontWeight: "400", fontSize: "1.09375rem" }}>
              Criar uma conta é rápido, fácil e gratuito
            </Typography>
            <Box sx={{ pt: "1em" }}>
              <Typography
                sx={{
                  fontSize: "large",
                  fontWeight: "400",
                  color: colors.lightGray,
                }}
              >
                Com a sua conta da Petz você tem acesso a Ofertas
              </Typography>
              <Typography
                sx={{
                  pt: "0.2em",
                  fontSize: "large",
                  fontWeight: "400",
                  color: colors.lightGray,
                }}
              >
                exclusivas, descontos, vai gerenciar a sua Assinatura Petz
              </Typography>
              <Typography
                sx={{
                  pt: "0.2em",
                  fontSize: "large",
                  fontWeight: "400",
                  color: colors.lightGray,
                }}
              >
                pode acompanhar os seus pedidos e muito mais!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
