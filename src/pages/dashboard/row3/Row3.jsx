import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { PieChart } from "../../Pie/PieChart";
import { Geography } from "../../geography/Geography";
import { Line } from "../../line/Line";
import { useNavigate } from "react-router-dom";
const border = "2px solid red";
export const Row3 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Stack
      useFlexGap
      direction={"row"}
      sx={{
        gap: 1.5,

        flexWrap: "wrap",
        mt: 1.4,
      }}
    >
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "28%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => navigate("/pie")}
      >
        <Typography
          sx={{
            padding: "30px 30px 0 30px",
            color: theme.palette.secondary.main,
            fontWeight: "600",
          }}
          variant="h6"
        >
          Campaign
        </Typography>

        <PieChart isDashbord={true} />
        <Box>
          <Typography variant="h6" sx={{ mt: "15px", textAlign: "center" }}>
            $48,352 revenue generated
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center", pb: 3 }}>
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => navigate("/line")}
      >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            padding: "30px 30px 0 30px",
            color: theme.palette.secondary.main,
          }}
        >
          Sales Quantity
        </Typography>

        <Line isDashbord={true} />
      </Paper>

      <Paper
        sx={{ flexGrow: 1, minWidth: "400px", width: "33%", cursor: "pointer" }}
        onClick={() => navigate("/geography")}
      >
        <Geography isDashbord={true} />
      </Paper>
    </Stack>
  );
};
