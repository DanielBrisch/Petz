import { Container, Grid } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeAppBar from "./appBar";
import HomeCard from "./card";
import HomeSlider from "./slider";
import ProductSlider from "./productSlider";

const HomePage = () => {
  const cardsData = [
    {
      image: "../src/assets/icons/clock.svg",
      title: "Receba em Horas",
      description: "Ver regras",
    },
    {
      image: "../src/assets/icons/car.svg",
      title: "Frete Grátis Brasil",
      description: "Confira",
    },
    {
      image: "../src/assets/icons/credit-card.svg",
      title: "Até 10x Sem Juros",
      description: "Ver regras",
    },
    {
      image: "../src/assets/icons/shop.svg",
      title: "Retire na Loja",
      description: "Saiba mais",
    },
  ];

  return (
    <>
      <HomeAppBar />
      <HomeSlider />

      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} md={3} key={index}>
              <HomeCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <ProductSlider />
    </>
  );
};

export default HomePage;
