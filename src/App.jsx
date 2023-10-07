import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import NavMobile from "./Components/NavMobile";
import Bookmark from "./Components/Bookmark";
import { Stack } from "@mui/material";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Frequently from "./Components/Frequently";
import Joined from "./Components/Joined";

function App() {
  return (
    <>
      <Stack spacing={20}>
        <Nav />
        <Bookmark />
        <Features />
        <Download />
        <Frequently />
        <Joined/>
      </Stack>

      {/* <NavMobile /> */}
    </>
  );
}

export default App;
