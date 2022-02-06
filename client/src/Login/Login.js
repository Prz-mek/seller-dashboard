import {
  Button,
  FormControl,
  Box,
  TextField,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Widget from "../Common/Widget";
import { apiUrl } from "../config";
import { AuthContext } from "./AuthContext";
const LoginInput = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 1 }}>
      <TextField
        {...props}
      />
    </FormControl>
  );
};
const LoginButton = (props) => {
  return (
    <Button fullWidth sx={{ height: 48 }} variant="contained" type="submit">
      <Typography variant="button">{props.name}</Typography>
    </Button>
  );
};
export default function Login() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useContext(AuthContext);
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: form.get("login"),
        password: form.get("password"),
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(data => {
      auth.authenticate(data.login);
      navigate(from, { replace: true });
    });
  };
  return (
    <Box sx={{
      maxWidth: "500px",
      mx: "auto"
    }}>
      <Typography color="text.disabled" sx={{ mb: 1 }}>Dostępne konta: william, bill, robert</Typography>
      <Widget>
        <form onSubmit={handleSubmit}>
          <LoginInput
            name="login"
            defaultValue="william"
            required
            placeholder={t("Adres e-mail lub login")}
          />
          <LoginInput
            name="password"
            type="password"
            required
            placeholder={t("Hasło")}
            InputProps={{
              readOnly: true,
            }}
            defaultValue="alamakota"
          />
          <LoginButton name={t("Zaloguj się")} />
        </form>
      </Widget>
    </Box>
  );
}
