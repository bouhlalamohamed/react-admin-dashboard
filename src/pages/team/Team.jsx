import { DataGrid } from "@mui/x-data-grid";
import { columns, mockDataTeam } from "./mockData";
import { Box } from "@mui/material";

export default function Team() {
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
            scrollbarColor: "#555 #1b1b1b",
          },
        }}
      />
    </Box>
  );
}
