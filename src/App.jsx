import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

// components
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBare";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />

      <SideBar handleDrawerClose={handleDrawerClose} open={open} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
