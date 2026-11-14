import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { BarChart } from "../../bar/BarChart";
import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Transactions } from "../data";

const border = "2px solid red";
export const Row2 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: "wrap",
        gap: 1.2,
        mt: 1.3,
      }}
    >
      <Paper
        sx={{
          maxWidth: 900,
          flexGrow: 1,
          minWidth: "400px",
         
          cursor: "pointer",
        }}
        onClick={() => navigate("/bar")}
      >
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              sx={{
                mb: 1,
                mt: 1,
                ml: 4,
              }}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" sx={{ ml: 4 ,mb:1}}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <BarChart isDahboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: (theme) =>
            theme.palette.mode === "dark"
              ? "#666 transparent"
              : "#aaa transparent",

          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#666" : "#aaa",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#888" : "#888",
          },
        }}
      >
        <Paper>
          <Typography
            sx={{
              fontWeight: "bold",
              p: 1.2,
              color: theme.palette.secondary.main,
            }}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item, index) => {
          return (
            <Paper
              key={index}
              sx={{
                mt: 0.9,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ p: 1.2 }}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                sx={{
                  borderRadius: 1.4,
                  p: 1,
                  color: theme.palette.getContrastText(
                    theme.palette.error.main,
                  ),
                  bgcolor: theme.palette.error.main,
                }}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};
