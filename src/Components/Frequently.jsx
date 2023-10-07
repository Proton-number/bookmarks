import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Frequently() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(212, 80%, 42%)",
      },
    },
  });

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h3">
          <b>Frequently Asked Questions</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ width: "42%" }}>
            Here are some of our FAQS. If you have any other questions you'd
            like answered please feel free to email us.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            elevation={0}
          >
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={
                <ThemeProvider theme={theme}>
                  <ExpandMoreIcon color="primary" />
                </ThemeProvider>
              }
            >
              <Typography>What is Bookmark?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum reiciendis
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            elevation={0}
          >
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel2-content"
              expandIcon={
                <ThemeProvider theme={theme}>
                  <ExpandMoreIcon color="primary" />
                </ThemeProvider>
              }
            >
              <Typography>How can i request a new browser?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum reiciendis
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            elevation={0}
          >
            <AccordionSummary
              id="panel3-header"
              aria-controls="panel3-content"
              expandIcon={
                <ThemeProvider theme={theme}>
                  <ExpandMoreIcon color="primary" />
                </ThemeProvider>
              }
            >
              <Typography>Is there a mobile app?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum reiciendis
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            elevation={0}
          >
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel4-content"
              expandIcon={
                <ThemeProvider theme={theme}>
                  <ExpandMoreIcon color="primary" />
                </ThemeProvider>
              }
            >
              <Typography>What about other Chromium browsers?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum reiciendis
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: "none", padding: "10px" }}
            >
              More Info
            </Button>
          </ThemeProvider>
        </Box>
      </Stack>
    </>
  );
}

export default Frequently;
