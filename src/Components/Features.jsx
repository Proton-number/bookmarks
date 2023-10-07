import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";

function Features() {
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h3">
          <b>Features</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: "42%" }}>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default Features;
