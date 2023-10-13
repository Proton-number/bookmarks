import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
  TextField,
} from "@mui/material";

function Joined() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(0, 100%, 64%)",
      },
    },
  });
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          backgroundColor: "hsl(228, 68%, 57%)",
          color: "white",
          p: {xs:'20px', sm:'18px', lg: "20px" },
        }}
      >
        <Typography variant="body2">
          <b>35,000+ ALREADY JOINED</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: {sm:'45%'} }}>
            stay up-date with what we're doing
          </Typography>
        </Box>

        <Stack
          spacing={3}
          direction={{ xs:'column', sm: "row" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Enter your email address..."
            type="email"
            InputProps={{
              style: {
                borderRadius: "8px",
                color: "black",
                backgroundColor:'white'
              },
            }}
          />
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none", padding: "10px" }}
            >
              Contact us
            </Button>
          </ThemeProvider>
        </Stack>
      </Stack>
    </>
  );
}

export default Joined;
