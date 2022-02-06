import {
  Box,
  Typography,
  Divider
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import React from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import OrdersAlert from "../../Common/OrdersAlert";

const orders = [
  {
    id: "unpaid",
    name: "Nieopłacone",
  },
  {
    id: "unsent",
    name: "Niewysłane",
  },
  {
    id: "returns",
    name: "Zwroty",
  }
]
const Orders = styled(Box)({
  margin: "auto",
  maxWidth: "300px"
});
const Order = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline"
});
const OrderType = styled(RouterLink)({
  display: "block",
  color: "inherit",
  textDecoration: "none",
  marginBottom: 12,
  "&:hover": {
    textDecoration: "underline"
  }
});

export default function OrdersWidget(props) {
  const { t } = useTranslation();
  const [alertOpen, setAlertOpen] = React.useState(false);
  const total = Object.values(props.data).reduce((a, b) => a + b);
  React.useEffect(() => {
    if (total === 0) {
      setAlertOpen(true);
    }
  }, []);

  return (
    <Box className="OrdersWidget WidgetContentWrapper">
      {alertOpen && (
        <OrdersAlert open={alertOpen} handleClose={() => {
          setAlertOpen(false);
        }} />
      )}
      <Orders sx={{ mt: 2 }}>
        {orders.map((order, id) => (
          <Order key={order.id}>
            <OrderType to={"orders/" + order.id}>
              <Typography variant="h5" component="span">
                {t(order.name)}
                {":"}
              </Typography>
            </OrderType>
            <Typography variant="h4" component="span">
              {props.data[order.id]}
            </Typography>
          </Order>
        ))}
      </Orders>

      <Divider
        sx={{
          width: "80%",
          my: 2,
          mx: "auto"
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h5" component="span">
          {t("Razem")}
        </Typography>
        <Typography variant="h3" component="span">
          {total}
        </Typography>
      </Box>
    </Box>
  );
}
