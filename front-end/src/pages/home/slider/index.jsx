import React from "react";
import Slider from "react-slick";
import { Box, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slidesData = [
    {
      src: "../src/assets/slider/imagem_1.jpg",
      title: "1. Esquenta Petz Friday com 70% OFF",
      alt: "1. Esquenta Petz Friday com 70% OFF",
    },
    {
      src: "../src/assets/slider/imagem_2.jpg",
      title: "2. Promoção especial",
      alt: "2. Promoção especial",
    },
    {
      src: "../src/assets/slider/imagem_3.jpg",
      title: "3. Cuide do seu pet",
      alt: "3. Cuide do seu pet",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          paddingY: 4,
        }}
      >
        <Slider {...settings} style={{ width: "80%" }}>
          {slidesData.map((slide, index) => (
            <Paper
              key={index}
              sx={{
                height: "20em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={slide.src}
                title={slide.title}
                alt={slide.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Paper>
          ))}
        </Slider>
      </Box>
    </>
  );
}
