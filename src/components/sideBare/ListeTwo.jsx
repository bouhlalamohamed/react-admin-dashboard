import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Array2 = [
  {
    text: "Profile Form",
    icon: <PersonOutlinedIcon />,
    path: "/form",
  },
  {
    text: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    path: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];
export default function ListeTwo() {
  return (
    <>
      {Array2.map((iteam) => (
        <ListItem key={iteam.path} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {iteam.icon}
            </ListItemIcon>
            <ListItemText primary={iteam.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}
