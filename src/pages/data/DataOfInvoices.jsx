import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export const dataInvoices = [
  {
    id: 1,
    name: "fatima connor",
    email: "sara.connor@example.com",
    age: 29,
    phone: "(555) 010-0001",
    access: "Admin",
  },
  {
    id: 2,
    name: "Michael Scott",
    email: "michael.scott@example.com",
    age: 38,
    phone: "(555) 010-0002",
    access: "Manager",
  },
  {
    id: 3,
    name: "Lina Haddad",
    email: "lina.haddad@example.com",
    age: 32,
    phone: "(555) 010-0003",
    access: "User",
  },
  {
    id: 4,
    name: "Omar Bennani",
    email: "omar.bennani@example.com",
    age: 27,
    phone: "(555) 010-0004",
    access: "User",
  },
  {
    id: 5,
    name: "Nora Williams",
    email: "nora.williams@example.com",
    age: 35,
    phone: "(555) 010-0005",
    access: "Manager",
  },
  {
    id: 6,
    name: "Adam Carter",
    email: "adam.carter@example.com",
    age: 41,
    phone: "(555) 010-0006",
    access: "Admin",
  },
  {
    id: 7,
    name: "Maya Patel",
    email: "maya.patel@example.com",
    age: 26,
    phone: "(555) 010-0007",
    access: "User",
  },
  {
    id: 8,
    name: "Youssef Amrani",
    email: "youssef.amrani@example.com",
    age: 30,
    phone: "(555) 010-0008",
    access: "User",
  },
  {
    id: 9,
    name: "Emily Brooks",
    email: "emily.brooks@example.com",
    age: 33,
    phone: "(555) 010-0009",
    access: "Manager",
  },
  {
    id: 10,
    name: "Daniel Reed",
    email: "daniel.reed@example.com",
    age: 28,
    phone: "(555) 010-0010",
    access: "User",
  },
  {
    id: 11,
    name: "Salma Idrissi",
    email: "salma.idrissi@example.com",
    age: 31,
    phone: "(555) 010-0011",
    access: "Admin",
  },
  {
    id: 12,
    name: "Lucas Martin",
    email: "lucas.martin@example.com",
    age: 37,
    phone: "(555) 010-0012",
    access: "Manager",
  },
  {
    id: 13,
    name: "Imane Alaoui",
    email: "imane.alaoui@example.com",
    age: 25,
    phone: "(555) 010-0013",
    access: "User",
  },
  {
    id: 14,
    name: "James Wilson",
    email: "james.wilson@example.com",
    age: 44,
    phone: "(555) 010-0014",
    access: "Admin",
  },
  {
    id: 15,
    name: "Amina Zahra",
    email: "amina.zahra@example.com",
    age: 29,
    phone: "(555) 010-0015",
    access: "User",
  },
  {
    id: 16,
    name: "Ethan Moore",
    email: "ethan.moore@example.com",
    age: 34,
    phone: "(555) 010-0016",
    access: "Manager",
  },
  {
    id: 17,
    name: "Khadija Naciri",
    email: "khadija.naciri@example.com",
    age: 36,
    phone: "(555) 010-0017",
    access: "User",
  },
  {
    id: 18,
    name: "Noah Taylor",
    email: "noah.taylor@example.com",
    age: 24,
    phone: "(555) 010-0018",
    access: "User",
  },
  {
    id: 19,
    name: "Hana El Fassi",
    email: "hana.elfassi@example.com",
    age: 40,
    phone: "(555) 010-0019",
    access: "Manager",
  },
  {
    id: 20,
    name: "Benjamin Clark",
    email: "benjamin.clark@example.com",
    age: 32,
    phone: "(555) 010-0020",
    access: "Admin",
  },
  {
    id: 21,
    name: "Meryem Tazi",
    email: "meryem.tazi@example.com",
    age: 28,
    phone: "(555) 010-0021",
    access: "User",
  },
  {
    id: 22,
    name: "Oliver King",
    email: "oliver.king@example.com",
    age: 39,
    phone: "(555) 010-0022",
    access: "Manager",
  },
  {
    id: 23,
    name: "Aya Mansouri",
    email: "aya.mansouri@example.com",
    age: 27,
    phone: "(555) 010-0023",
    access: "User",
  },
  {
    id: 24,
    name: "William Harris",
    email: "william.harris@example.com",
    age: 45,
    phone: "(555) 010-0024",
    access: "Admin",
  },
  {
    id: 25,
    name: "Nadia Karim",
    email: "nadia.karim@example.com",
    age: 33,
    phone: "(555) 010-0025",
    access: "User",
  },
  {
    id: 26,
    name: "Leo Anderson",
    email: "leo.anderson@example.com",
    age: 26,
    phone: "(555) 010-0026",
    access: "Manager",
  },
  {
    id: 27,
    name: "Rania Berrada",
    email: "rania.berrada@example.com",
    age: 35,
    phone: "(555) 010-0027",
    access: "User",
  },
  {
    id: 28,
    name: "Henry Thomas",
    email: "henry.thomas@example.com",
    age: 30,
    phone: "(555) 010-0028",
    access: "User",
  },
  {
    id: 29,
    name: "Zineb Chraibi",
    email: "zineb.chraibi@example.com",
    age: 42,
    phone: "(555) 010-0029",
    access: "Admin",
  },
  {
    id: 30,
    name: "Jack Robinson",
    email: "jack.robinson@example.com",
    age: 31,
    phone: "(555) 010-0030",
    access: "Manager",
  },
  {
    id: 31,
    name: "Mina Saidi",
    email: "mina.saidi@example.com",
    age: 29,
    phone: "(555) 010-0031",
    access: "User",
  },
  {
    id: 32,
    name: "Alexander Lee",
    email: "alexander.lee@example.com",
    age: 37,
    phone: "(555) 010-0032",
    access: "User",
  },
  {
    id: 33,
    name: "Houda Fikri",
    email: "houda.fikri@example.com",
    age: 34,
    phone: "(555) 010-0033",
    access: "Manager",
  },
  {
    id: 34,
    name: "Samuel Walker",
    email: "samuel.walker@example.com",
    age: 28,
    phone: "(555) 010-0034",
    access: "User",
  },
  {
    id: 35,
    name: "Rim Lahlou",
    email: "rim.lahlou@example.com",
    age: 39,
    phone: "(555) 010-0035",
    access: "Admin",
  },
  {
    id: 36,
    name: "David Young",
    email: "david.young@example.com",
    age: 25,
    phone: "(555) 010-0036",
    access: "User",
  },
  {
    id: 37,
    name: "Sofia Garcia",
    email: "sofia.garcia@example.com",
    age: 32,
    phone: "(555) 010-0037",
    access: "Manager",
  },
  {
    id: 38,
    name: "Mehdi Laaroussi",
    email: "mehdi.laaroussi@example.com",
    age: 36,
    phone: "(555) 010-0038",
    access: "User",
  },
  {
    id: 39,
    name: "Chloe Bennett",
    email: "chloe.bennett@example.com",
    age: 27,
    phone: "(555) 010-0039",
    access: "User",
  },
  {
    id: 40,
    name: "Yassine Rami",
    email: "yassine.rami@example.com",
    age: 41,
    phone: "(555) 010-0040",
    access: "Admin",
  },
];

// field => Required
export const columnsInvoices = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  { field: "age", headerName: "Age", align: "center" },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "Access",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row: { access } }) => {
      return (
        <Box
          sx={{
            p: "5px",
            mx: "auto",
            my: "10px",

            width: "99px",
            height: "30px",
            boxSizing: "border-box",
            borderRadius: "3px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "5px",

            backgroundColor:
              access === "Admin"
                ? "#2196f3"
                : access === "Manager"
                  ? "#e040fb"
                  : "#3da58a",
          }}
        >
          {access === "Admin" && (
            <AdminPanelSettingsOutlined
              fontSize="small"
              sx={{ color: "#fff" }}
            />
          )}

          {access === "Manager" && (
            <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
          )}

          {access === "User" && (
            <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
          )}

          <Typography sx={{ color: "#fff" }}>{access}</Typography>
        </Box>
      );
    },
  },
];
