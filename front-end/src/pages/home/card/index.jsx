import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HomeCard({ image, title, description }) {
  return (
    <Card
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <CardMedia
        component="img"
        sx={{ width: 20, height: 20 }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
