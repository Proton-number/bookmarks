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
      spacing={{ xs: 4, sm: 8, lg: 0 }}
      direction={{ xs: "column", sm: "column", lg: "row" }}
      sx={{
        alignItems: { lg: "center" },
        position: { xs: "relative", lg: "initial" },
        zIndex:1
      }}
    >
      <Stack spacing={4} sx={{ p: { xs: "30px", sm: "40px", lg: "80px" } }}>
        <Typography
          component={motion.h2}
          initial={{opacity:0,  rotate: -8 }}
          animate={{ opacity:1,  rotate: 0 }}
          transition={{duration:.8}}
          variant="h2"
          sx={{ textAlign: { sm: "left" }, width: { lg: "70%" } }}
        >
          A Simple Bookmark Manager
        </Typography>
        <Typography
           component={motion.p}
           initial={{opacity:0,  y:15 }}
           animate={{ opacity:1,  y: 0 }}
           transition={{duration:1, type:'spring'}}
          sx={{
            textAlign: { sm: "left" },
            width: { sm: "88%", lg: "50%" },
            opacity: "70%",
          }}
        >
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.{" "}
        </Typography>

        <Stack
          spacing={4}
          direction="row"
          sx={{
            justifyContent: { xs: "center", sm: "left" },
          }}
        >
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
          component={motion.div}
          initial={{opacity:0,  x:15 }}
          animate={{ opacity:1,  x: 0 }}
          transition={{duration:.5, type:'spring'}}
        sx={{
          backgroundColor: "hsl(227, 57%, 53%)",
          position: "absolute",
          padding: { xs: "120px", sm: "210px", lg: "200px" },
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
          width: {
            xs: "20%",
            sm: "12%",
          },
          top: { xs: "470px", sm: "320px", lg: "auto" },
          right: 0,
        }}
      >
        <Box
           initial={{opacity:0,  x:15 }}
           animate={{ opacity:1,  x: 0 }}
           transition={{duration:.8, type:'spring'}}
          component={motion.img}
          src={hero}
          sx={{
            position: "absolute",
            top: "-30px",
            right: "30px",
            width: {
              xs: "320px",
              sm: "680px",
              lg: "100%",
            },
          }}
        />
      </Box>
    </Stack>
  );
}

export default Bookmark;
