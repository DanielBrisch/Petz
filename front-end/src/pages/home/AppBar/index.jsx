import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HomeAppBar() {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src="./src/assets/Petz_Logo.svg"></img>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button color="inherit">Cachorro</Button>
            <Button color="inherit">Gato</Button>
            <Button color="inherit">Pássaro</Button>
            <Button color="inherit">Peixe</Button>
            <Button color="inherit">Outros Pets</Button>
            <Button color="inherit">Casa e Jardim</Button>
            <Button color="inherit">Promoções</Button>
            <Button color="inherit">Serviços</Button>
            <Button color="inherit">Clubz</Button>
          </Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <Button color="primary">Entrar</Button>
          <Button color="primary">Cadastrar-se</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
