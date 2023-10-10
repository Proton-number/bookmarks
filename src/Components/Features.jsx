import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
  Tabs,
  Tab,
} from "@mui/material";
import { motion } from "framer-motion";
import tab1 from "/src/images/illustration-features-tab-1.svg";
import tab2 from "/src/images/illustration-features-tab-2.svg";
import tab3 from "/src/images/illustration-features-tab-3.svg";

function Features() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, index) => {
    setTabIndex(index);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(0, 0%, 13%)",
      },
      secondary: {
        main: "hsl(0, 100%, 64%)",
      },
      forButton: {
        main: "hsl(228, 68%, 57%)",
      },
    },
  });

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
          <Typography sx={{ width: { sm: "60%", lg: "42%" } }}>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Typography>
        </Box>

        <Stack
          spacing={6}
          sx={{
            alignItems: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <Tabs
              textColor="primary"
              indicatorColor="secondary"
              value={tabIndex}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: { sm: 6, lg: 8 },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row", lg: "row" },
                },
              }}
            >
              <Tab label="Simple Bookmarking" />
              <Tab label="Speedy Searching" />
              <Tab label="Easy Sharing" />
            </Tabs>
          </ThemeProvider>

          {tabIndex === 0 && (
            <Stack
              spacing={{ lg: 30 }}
              direction={{ sm: "column", lg: "row" }}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "hsl(227, 57%, 53%)",
                  position: "relative",
                  padding: { sm: "160px", lg: "200px" },
                  borderTopRightRadius: "50%",
                  borderBottomRightRadius: "50%",
                  width: {
                    lg: "12%",
                  },
                  left: { sm: "-231px", lg: "0" },
                }}
              >
                <Box
                  component={motion.img}
                  src={tab1}
                  sx={{
                    position: "absolute",
                    top: "-2px",
                    left: "130px",
                    width: {
                      sm: "420px",
                      lg: "100%",
                    },
                  }}
                />
              </Box>

              <Stack spacing={1.4}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: { sm: "center", lg: "left" },
                    width: { lg: "100%" },
                  }}
                >
                  Bookmark in one click
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "center", lg: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: { sm: "center", lg: "left" },
                      width: { sm: "50%", lg: "80%" },
                      opacity: "70%",
                    }}
                  >
                    {" "}
                    Organise your bookmarks however you like. Our simple
                    drag-and-drop interface give you complete control over how
                    you manage your favourite sites.{" "}
                  </Typography>
                </Box>

                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ justifyContent: { sm: "center", lg: "left" } }}
                >
                  <ThemeProvider theme={theme}>
                    <Button
                      color="forButton"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: "white",
                        textTransform: "none",
                        padding: "10px",
                      }}
                    >
                      More Info
                    </Button>
                  </ThemeProvider>
                </Stack>
              </Stack>
            </Stack>
          )}

          {tabIndex === 1 && (
            <Stack
              spacing={{ lg: 30 }}
              direction={{ sm: "column", lg: "row" }}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "hsl(227, 57%, 53%)",
                  position: "relative",
                  left: { sm: "-231px", lg: "-40px" },
                  padding: { sm: "160px", lg: "200px" },
                  borderTopRightRadius: "50%",
                  borderBottomRightRadius: "50%",
                  width: {
                    lg: "12%",
                  },
                }}
              >
                <Box
                  component={motion.img}
                  src={tab2}
                  sx={{
                    position: "absolute",
                    top: "-13px",
                    left: "180px",
                    width: {
                      sm: "371px",
                      lg: "100%",
                    },
                  }}
                />
              </Box>

              <Stack spacing={1.4}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: { sm: "center", lg: "left" },
                    width: { lg: "100%" },
                  }}
                >
                  Intelligent search
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "center", lg: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: { sm: "center", lg: "left" },
                      width: { sm: "50%", lg: "80%" },
                      opacity: "70%",
                    }}
                  >
                    {" "}
                    Our powerful search feture will help you find saved sites in
                    no time at all. No need to trawl through all of your
                    bookmarks.{" "}
                  </Typography>
                </Box>

                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ justifyContent: { sm: "center", lg: "left" } }}
                >
                  <ThemeProvider theme={theme}>
                    <Button
                      color="forButton"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: "white",
                        textTransform: "none",
                        padding: "10px",
                      }}
                    >
                      More Info
                    </Button>
                  </ThemeProvider>
                </Stack>
              </Stack>
            </Stack>
          )}
          {tabIndex === 2 && (
            <Stack
              spacing={{ lg: 30 }}
              direction={{ sm: "column", lg: "row" }}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "hsl(227, 57%, 53%)",
                  position: "relative",
                  left: { sm: "-231px", lg: "-40px" },
                  padding: { sm: "160px", lg: "200px" },
                  borderTopRightRadius: "50%",
                  borderBottomRightRadius: "50%",
                  width: {
                    lg: "12%",
                  },
                }}
              >
                <Box
                  component={motion.img}
                  src={tab3}
                  sx={{
                    position: "absolute",
                    top: "-13px",
                    left: "180px",
                    width: {
                      sm: "371px",
                      lg: "100%",
                    },
                  }}
                />
              </Box>

              <Stack spacing={1.4}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: { sm: "center", lg: "left" },
                    width: { lg: "100%" },
                  }}
                >
                  Share your bookmarks
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "center", lg: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: { sm: "center", lg: "left" },
                      width: { sm: "50%", lg: "80%" },
                      opacity: "70%",
                    }}
                  >
                    {" "}
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a
                    button.{" "}
                  </Typography>
                </Box>

                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ justifyContent: { sm: "center", lg: "left" } }}
                >
                  <ThemeProvider theme={theme}>
                    <Button
                      color="forButton"
                      variant="contained"
                      disableElevation
                      sx={{
                        color: "white",
                        textTransform: "none",
                        padding: "10px",
                      }}
                    >
                      More Info
                    </Button>
                  </ThemeProvider>
                </Stack>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default Features;
