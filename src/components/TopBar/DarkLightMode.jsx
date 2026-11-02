import SunnyIcon from "@mui/icons-material/Sunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DarkLightModeContext } from "../../../context/darkOrLightMode";
import { useContext } from "react";

export function DarkLightMode() {
  const theme = useTheme();
  const { setMode } = useContext(DarkLightModeContext);

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        {theme.palette.mode === "light" ? (
          <NightlightRoundIcon
            onClick={() => {
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
              localStorage.setItem(
                "themeMode",
                theme.palette.mode === "light" ? "dark" : "light",
              );
            }}
          />
        ) : (
          <SunnyIcon
            onClick={() => {
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
              localStorage.setItem(
                "themeMode",
                theme.palette.mode === "light" ? "dark" : "light",
              );
            }}
          />
        )}
      </IconButton>
    </>
  );
}
