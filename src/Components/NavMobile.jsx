import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import bookmark from "/src/images/logo-bookmark.svg";

function NavMobile() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(0, 0%, 13%)",
      },
    },
  });

  return (
    <>
      <AppBar
        id="mobileNav"
        sx={{ backgroundColor: "hsl(0, 0%, 100%)", padding: "5px" }}
        elevation={3}
      >
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box component="img" src={bookmark} />
          </Stack>

          <ThemeProvider theme={theme}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => setisDrawerOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </ThemeProvider>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="250px" role="presentation">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>

          {/* <Stack spacing={3} style={{ textAlign: "center", padding: "35px" }}>
           </Stack>
        */}
        </Box>
      </Drawer>
    </>
  );
}

export default NavMobile;
