import { Alert, Link, Snackbar } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

export default function OrdersAlert(props) {
  const { t } = useTranslation();
  return (
    <Snackbar open={props.open} autoHideDuration={15000}>
      <Alert variant="filled" severity="info" onClose={props.handleClose}>
        <Trans i18nKey="OrdersAlert">
          Nie masz żadnych zamówień! Aby zwiększyć widoczność ofert kliknij{" "}
          <Link sx={{color:"#add8e6"}} href="#">tutaj</Link>.
        </Trans>
      </Alert>
    </Snackbar>
  )
}