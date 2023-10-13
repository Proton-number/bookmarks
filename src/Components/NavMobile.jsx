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
      secondary: {
        main: "hsl(0, 0%, 100%)",
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
      PaperProps={{
        sx: {
          background: 'rgba(47,56,76,0.5)',
          backdropFilter: 'blur(19px)'
        },
        }}
        id='drawer'
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="350px" role="presentation" >
          <Toolbar sx={{justifyContent:'space-between'}}>
            <Box
              component="img"
              src={bookmark}
              sx={{
                filter:
                  " invert(100%) sepia(2%) saturate(83%) hue-rotate(120deg) brightness(120%) contrast(100%)",
              }}
            />
            <ThemeProvider theme={theme}>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
           </ThemeProvider>
          </Toolbar>

          <Stack spacing={8} style={{ textAlign: "center",color:'white', padding: "35px" }}>
            <Typography variant='h6' sx={{cursor:'pointer'}}>FEATURES</Typography>
            <Typography variant='h6' sx={{cursor:'pointer'}}>PRICING</Typography>
            <Typography variant='h6' sx={{cursor:'pointer'}}>CONTACT</Typography>
            <Button variant="outlined" sx={{color:'white', borderColor:'white'}}>LOGIN</Button>
           </Stack>
       
        </Box>
      </Drawer>
    </>
  );
}

export default NavMobile;
