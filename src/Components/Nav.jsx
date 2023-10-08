import {
  Box,
  AppBar,
  Typography,
  Button,
  Toolbar,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import bookmark from "/src/images/logo-bookmark.svg";

function Nav() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(0, 100%, 64%)",
      },
    },
  });
  return (
    <Box id="desktopNav">
      <AppBar
        sx={{ backgroundColor: "#ffffff", color: "black", padding: "10px" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box component="img" src={bookmark} />

          <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
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
              PRICING
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "hsl(0, 100%, 64%)",
                },
              }}
            >
              CONTACT
            </Typography>

            <ThemeProvider theme={theme}>
              <Button variant="contained" disableElevation>
                login
              </Button>
            </ThemeProvider>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
