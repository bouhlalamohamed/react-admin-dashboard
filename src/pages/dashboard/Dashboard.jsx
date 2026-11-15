import {Button,Box} from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import { Row1 } from "./row1/Row1";
import { Row2 } from "./row2/Row2";
import { Row3 } from "./row3/Row3";

export default function Dashboard() {
  return (
    <Box>
      
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
         <Row1 />
         <Row2 />
         <Row3 />
    </Box>
  );
}
