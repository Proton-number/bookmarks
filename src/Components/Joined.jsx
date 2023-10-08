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
      <Stack spacing={2} sx={{backgroundColor:'hsl(228, 68%, 57%)', color:'white', p:{lg:'20px'},}}>
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
          <Typography sx={{ width: "42%" }}>
            stay up-date with what we're doing
          </Typography>
        </Box>

        <Stack
          spacing={3}
          direction={{ sm: "row" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField placeholder="Enter your email address" type="email" sx={{backgroundColor:'white'}} />
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
