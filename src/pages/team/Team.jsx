import { DataGrid } from "@mui/x-data-grid";
import { columns, mockDataTeam } from "../data/DataOfTeam";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Team() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: {
          xs: 400,
          sm: 500,
          md: 600,
        },
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
        },
        px: {
          xs: 1,
          sm: 2,
          md: 3,
        },
      }}
    >
      <DataGrid
        rows={mockDataTeam}
        columns={columns}
        sx={{
          "& .MuiDataGrid-scrollbar": {
            scrollbarWidth: "thin",
            scrollbarColor:
              theme.palette.mode === "light" ? "#555 #f6f6f6" : "#555 #1b1b1b",
          },
        }}
      />
    </Box>
  );
}
