import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import bookmark from "/src/images/logo-bookmark.svg";
import facebook from "/src/images/icon-facebook.svg";
import twitter from "/src/images/icon-twitter.svg";

function Footer() {
  return (
    <Box
      sx={{
        p: {
          lg: "25px",
        },
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
        backgroundColor: "hsl(228, 29%, 21%)",
      }}
    >
      <Stack
        direction={{ sm: "row" }}
        sx={{ alignItems: "center" }}
        spacing={{ lg: 8 }}
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

      <Stack direction={{ sm: "row" }} spacing={{ lg: 4 }}>
        <Box component="img" src={facebook} />
        <Box component="img" src={twitter} />
      </Stack>
    </Box>
  );
}

export default Footer;
