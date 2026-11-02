import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./palette";

export let getTheme = (mode) =>
  createTheme({
    palette: getDesignTokens(mode),
  });
