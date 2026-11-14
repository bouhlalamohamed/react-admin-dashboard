import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Box, useTheme, Card, Typography, Stack } from "@mui/material";
import { data1, data2, data3, data4 } from "../data";
import { CardComponent } from "./Card";

export const Row1 = () => {
  
  const theme = useTheme();

  const cardsData = [
    {
      icon: (
        <EmailIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "12,361",
      subTitle: "Emails Sent",
      increase: "+14%",
      data: data1,
      scheme: "nivo",
    },
    {
      icon: (
        <PointOfSaleIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "431,225",
      subTitle: "Sales obtained",
      increase: "+21%",
      data: data2,
      scheme: "category10",
    },
    {
      icon: (
        <PersonAddIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "32,441",
      subTitle: "New Clients",
      increase: "+5%",
      data: data3,
      scheme: "accent",
    },
    {
      icon: (
        <TrafficIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "1,325,134",
      subTitle: "Traffic Received",
      increase: "+43%",
      data: data4,
      scheme: "dark2",
    },
  ];

  return (
    <Stack
      useFlexGap
      sx={{
        flexWrap: "wrap",
        gap: 1,
        justifyContent: { xs: "center", sm: "space-between" },
      }}
      direction={"row"}
    >
      {cardsData.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          subtitle={card.subTitle}
          increase={card.increase}
          icon={card.icon}
          data={card.data}
          scheme={card.scheme}
        ></CardComponent>
      ))}
    </Stack>
  );
};
