import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function Avatarr() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontSize: "13px" }}>Mohamed Bouhlala</Typography>
        <Typography sx={{ fontSize: "13px" }} color="text.secondary">
          Full stack Developer
        </Typography>
      </Box>
    </Box>
  );
}
