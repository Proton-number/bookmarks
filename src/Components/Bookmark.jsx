import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import hero from "/src/images/illustration-hero.svg";
import { motion } from "framer-motion";

function Bookmark() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(227, 65%, 55%)",
      },
      secondary: {
        main: "hsl(0, 0%, 97%)",
      },
    },
  });
  return (
    <Stack
      
      direction={{ xs: "column", sm: "row" }}
      sx={{ alignItems: "center", justifyContent: "space-between", }}
    >
      <Stack spacing={4} sx={{p:{lg:'80px'}}} >
        <Typography
          variant="h2"
          sx={{ textAlign: "left", width: { lg: "70%" } }}
        >
          A Simple Bookmark Manager
        </Typography>
        <Typography sx={{ textAlign: "left", width: { lg: "50%" } }}>
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.{" "}
        </Typography>

        <Stack spacing={4} direction="row" sx={{ justifyContent: "left" }}>
          <ThemeProvider theme={theme}>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              sx={{ textTransform: "none", padding: "10px" }}
            >
              Get it on Chrome
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              color="secondary"
              variant="contained"
              sx={{ textTransform: "none", padding: "10px" }}
            >
              {" "}
              Get it on Firefox{" "}
            </Button>
          </ThemeProvider>
        </Stack>
      </Stack>

      <Box
        sx={{
          backgroundColor: "hsl(227, 57%, 53%)",
          position: "relative",
          padding: { lg: "200px" },
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
        }}
      >
        <Box
          component={motion.img}
          src={hero}
          sx={{ position: "absolute", top: "-50px", right: "100px" }}
        />
      </Box>
    </Stack>
  );
}

export default Bookmark;
