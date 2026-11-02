import Box from "@mui/material/Box";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "./theme/index.js";

import CssBaseline from "@mui/material/CssBaseline";
import { DarkLightModeContext } from "../context/darkOrLightMode";


// components
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBare";

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("light");

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={getTheme(localStorage.getItem("themeMode") || mode)}>
      <DarkLightModeContext.Provider value={{ setMode }}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />

          <SideBar handleDrawerClose={handleDrawerClose} open={open} />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        </Box>
      </DarkLightModeContext.Provider>
    </ThemeProvider>
  );
}
