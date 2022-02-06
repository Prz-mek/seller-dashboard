import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./Login/AuthContext";
import { HashRouter } from "react-router-dom";
import App from "./App";
import i18n from "./i18n";
import { StyledEngineProvider } from "@mui/material";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
  rootElement
);
