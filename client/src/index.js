import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./Login/AuthContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import i18n from "./i18n";
import { StyledEngineProvider } from "@mui/material";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
