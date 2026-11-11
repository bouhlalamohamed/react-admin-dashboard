import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function NavigationList({ items, open }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
      {items.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to={item.path}
            sx={{
              minHeight: 10,
              py: 0.5,
              justifyContent: open ? "initial" : "center",
              px: 1.5,
              bgcolor:
                location.pathname === item.path
                  ? theme.palette.mode === "dark"
                    ? "grey.800"
                    : "grey.200"
                  : null,
            }}
            onclick={() => {
              navigate(item.path);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}
