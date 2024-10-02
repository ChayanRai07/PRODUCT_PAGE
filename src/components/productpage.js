// src/components/ProductPage.js

import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Rating from '@mui/material/Rating'; // Import Rating component
import { keyframes } from "@mui/system"; // Import keyframes for animation

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProductPage = () => {
  const [mainImage, setMainImage] = useState("https://picsum.photos/450/500");

  const thumbnails = [
    "https://picsum.photos/450/500?random=1",
    "https://picsum.photos/450/500?random=2",
    "https://picsum.photos/450/500?random=3",
    "https://picsum.photos/450/500?random=4",
    "https://picsum.photos/450/500?random=5",
    "https://picsum.photos/450/500?random=6",
  ];

  const ratingValue = 3; // Set the desired rating value

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "100vh", p: { xs: 2, sm: 3 }, animation: `${fadeIn} 1s ease` }} // Fade-in animation
    >
      {/* Left Side (Product Images) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Grid container direction="row" spacing={2}>
          {/* Thumbnail Images */}
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
                  maxWidth: "70px",
                }}
                onClick={() => setMainImage(thumbnail)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1) rotate(5deg)"; // Added rotation
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            ))}
          </Grid>

          {/* Main Product Image */}
          <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={mainImage}
              alt="Product"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "12px",
                objectFit: "cover",
                transition: "opacity 0.3s ease-in-out", // Smooth opacity transition
                opacity: 0.8,
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Right Side (Product Details) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Product Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: { xs: "center", md: "left" },
            mb: 2,
            transition: "color 0.3s",
            "&:hover": { color: "#ff5722" }, // Color change on hover
          }}
        >
          Men Round Neck Pure Cotton T-shirt
        </Typography>

        {/* Rating Stars with Value */}
        <div style={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Rating
            name="product-rating"
            value={ratingValue} // Set the desired rating value
            readOnly
            sx={{ mr: 1 }} // Add some margin to the right of the stars
          />
          <Typography variant="body1" sx={{ color: "#333" }}>
            {ratingValue} / 5
          </Typography>
        </div>

        {/* Product Price */}
        <Typography
          variant="h5"
          sx={{
            color: "#888",
            fontWeight: "500",
            textAlign: { xs: "center", md: "left" },
            mb: 2,
          }}
        >
          $80
        </Typography>

        {/* Product Description */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
            textAlign: { xs: "center", md: "left" },
            mb: 2,
            lineHeight: "1.5",
          }}
        >
          A lightweight, usually knitted, pullover shirt, close-fitting and
          with a round neckline and short sleeves, worn as an undershirt or
          outer garment.
        </Typography>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          sx={{
            padding: "10px 24px",
            borderRadius: "4px",
            mt: 2,
            fontWeight: "bold",
            fontSize: "14px",
            background: "linear-gradient(90deg, #000, #333)",
            color: "white",
            textTransform: "none",
            width: "auto",
            transition: "transform 0.2s ease-in-out, background 0.2s", // Button transition
            "&:hover": {
              background: "linear-gradient(90deg, #333, #000)",
              transform: "scale(1.05)", // Scale effect on hover
            },
          }}
        >
          Add to Cart
        </Button>

        {/* Product Info */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.875rem",
            mt: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          100% Original product. Cash on delivery is available on this product.
          Easy return and exchange policy within 7 days.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
