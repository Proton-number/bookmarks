import React, { useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
  Paper,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import chrome from "/src/images/logo-chrome.svg";
import firefox from "/src/images/logo-firefox.svg";
import opera from "/src/images/logo-opera.svg";
import dots from "/src/images/bg-dots.svg";

function Download() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end ", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.9, 2])

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(228, 68%, 57%)",
      },
    },
  });
  return (
    <>
      <Stack
        component={motion.div}
        ref={targetRef}
        style={{ opacity, scale }}
        spacing={4}
        sx={{ marginTop: { xs: "300px", sm: "360px", lg: "90px" } }}
      >
        <Typography
          variant="h3"
        >
          <b>Download the extension</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: { xs: "70%", sm: "50%" } }}>
            We've got more browsers in the pipeline. Please do not let us know
            if you've got a favorite you'd like us to prioritize.
          </Typography>
        </Box>

        <Stack
          spacing={4}
          direction={{ xs: "column", sm: "column", lg: "row" }}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Paper elevation={12}>
            <Stack spacing={3} sx={{ padding: "15px" }}>
              <Box>
                <Box
                  component={motion.img}
                  src={chrome}
                  sx={{ width: "100px" }}
                />
              </Box>
              <Typography>Add to Chrome</Typography>
              <Typography sx={{ opacity: "60%" }}>
                Minimum version 62
              </Typography>
              <Box component={motion.img} src={dots} />
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ textTransform: "none", padding: "10px" }}
                >
                  <b> Add & Install Extension</b>
                </Button>
              </ThemeProvider>
            </Stack>
          </Paper>
          <Paper style={{ marginTop: { lg: "100px" } }} elevation={12}>
            <Stack spacing={3} sx={{ padding: "15px" }}>
              <Box>
                <Box
                  component={motion.img}
                  src={firefox}
                  sx={{ width: "100px" }}
                />
              </Box>
              <Typography>Add to Chrome</Typography>
              <Typography sx={{ opacity: "60%" }}>
                Minimum version 56
              </Typography>
              <Box component={motion.img} src={dots} />
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ textTransform: "none", padding: "10px" }}
                >
                  <b> Add & Install Extension</b>
                </Button>
              </ThemeProvider>
            </Stack>
          </Paper>

          <Paper elevation={12}>
            <Stack spacing={3} sx={{ padding: "15px" }}>
              <Box>
                <Box
                  component={motion.img}
                  src={opera}
                  sx={{ width: "100px" }}
                />
              </Box>
              <Typography>Add to Chrome</Typography>
              <Typography sx={{ opacity: "60%" }}>
                Minimum version 46
              </Typography>
              <Box component={motion.img} src={dots} />
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ textTransform: "none", padding: "10px" }}
                >
                  <b> Add & Install Extension</b>
                </Button>
              </ThemeProvider>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </>
  );
}

export default Download;
