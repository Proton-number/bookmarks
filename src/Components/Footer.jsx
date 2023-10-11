import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import bookmark from "/src/images/logo-bookmark.svg";
import facebook from "/src/images/icon-facebook.svg";
import twitter from "/src/images/icon-twitter.svg";

function Footer() {
  return (
    <Box
      sx={{
        p: {
          xs:'20px',
          sm: "20px",
          lg: "25px",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
        backgroundColor: "hsl(228, 29%, 21%)",
      }}
    >
      <Stack
        direction={{ sm: "row" }}
        sx={{ alignItems: "center" }}
        spacing={{ xs:3 ,sm: 4, lg: 8 }}
      >
        <Box
          component="img"
          src={bookmark}
          sx={{
            filter:
              " invert(100%) sepia(2%) saturate(83%) hue-rotate(120deg) brightness(120%) contrast(100%)",
          }}
        />
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "hsl(0, 100%, 64%)",
            },
          }}
        >
          FEATURES
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "hsl(0, 100%, 64%)",
            },
          }}
        >
          {" "}
          PRICING{" "}
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "hsl(0, 100%, 64%)",
            },
          }}
        >
          {" "}
          CONTACT
        </Typography>
      </Stack>

      <Stack sx={{marginTop:{xs:2, sm:0}}} direction={{ sm: "row" }} spacing={{ xs:2, sm: 2.5, lg: 4 }}>
        <Box
          component="img"
          src={facebook}
          sx={{
            "&:hover": {
              filter:
                "brightness(0) saturate(100%) invert(23%) sepia(65%) saturate(2645%) hue-rotate(342deg) brightness(87%) contrast(111%)",
            },
          }}
        />
        <Box
          component="img"
          src={twitter}
          sx={{
            "&:hover": {
              filter:
                "brightness(0) saturate(100%) invert(23%) sepia(65%) saturate(2645%) hue-rotate(342deg) brightness(87%) contrast(111%)",
            },
          }}
        />
      </Stack>
    </Box>
  );
}

export default Footer;
