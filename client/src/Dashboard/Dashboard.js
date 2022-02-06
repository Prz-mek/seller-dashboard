import React from "react";
import ChartWidget from "./ChartWidget/ChartWidget";
import OrdersWidget from "./OrdersWidget/OrdersWidget";
import { Box, Grid } from "@mui/material";
import Widget from "../Common/Widget";
import RankingWidget from "./RankingWidget/RankingWidget";
import LoadingComponent from "../Common/LoadingComponent";
const widgets = [
  {
    component: ChartWidget,
    name: "Wykres sprzedaży",
    href: "#chart",
    load: "saledata",
    grid: {
      xs: 12
    }
  },
  {
    component: RankingWidget,
    name: "Ranking ofert",
    href: "#ranking",
    load: "ranking",
    grid: {
      xs: 12,
      md: 6
    }
  },
  {
    component: Box,
    name: "Opinie kupujących",
    href: "#opinions",
    load: "",
    grid: {
      xs: 12,
      md: 6
    }
  },
  {
    component: Box,
    name: "Jakość sprzedaży",
    href: "#quality",
    load: "",
    grid: {
      xs: 12,
      sm: 6
    }
  },
  {
    component: OrdersWidget,
    name: "Zamówienia",
    href: "#orders",
    load: "orders",
    grid: {
      xs: 12,
      sm: 6
    }
  }
]
export default function Dashboard() {
  return (
    <Grid alignContent="stretch" alignItems="stretch" container spacing={3}>
      {widgets.map(widget => (
        <Grid key={widget.name} item {...widget.grid}>
          <Widget name={widget.name} href={widget.href}>
            <LoadingComponent load={widget.load}>
              {data => (
                <widget.component data={data} />
              )}
            </LoadingComponent>
          </Widget>
        </Grid>
      ))}
    </Grid>
  );
}
