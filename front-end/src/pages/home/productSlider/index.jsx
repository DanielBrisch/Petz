import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const [productsData, setProductsData] = useState([]);
  const token = localStorage.getItem("jwtToken");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/dog/food/find-all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProductsData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ padding: 20, pt: 5 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Comida de cachorro
      </Typography>
      <Slider {...settings}>
        {productsData.map((product, index) => (
          <Box key={index}>
            <Card
              sx={{
                width: 220,
                height: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                pb: 10,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain" }}
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "line-through", color: "gray" }}
                ></Typography>
                <Typography variant="h6" color="primary">
                  {product.discountedPrice}
                </Typography>
                <Typography variant="caption">{product.descricao}</Typography>
              </CardContent>
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <AddIcon />
              </IconButton>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
