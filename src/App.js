import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { Box, ThemeProvider } from "@mui/material";
import getTheme from "./theme";
import { withTranslation } from "react-i18next";
import OrdersPlaceholder from "./Dashboard/OrdersWidget/OrdersPlaceholder";
import Layout from "./Layout/Layout";
import PrivateRoute from "./Login/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      theme: getTheme("light")
    };
  }
  toggleNightMode = () => {
    this.setState((prevState) => ({
      isDark: !prevState.isDark,
      theme: prevState.isDark ? getTheme("light") : getTheme("dark")
    }));
  };
  render() {
    const { t } = this.props;
    return (
      <ThemeProvider theme={this.state.theme}>
        <Box
          className="App"
          sx={{
            backgroundColor: "background.default",
            color: "text.primary"
          }}
        >
          <Routes>
            <Route
              element={
                <Layout
                  toggleNightMode={this.toggleNightMode}
                  isDark={this.state.isDark}
                />
              }
            >
              <Route path="login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard theme={this.state.theme} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/orders/*"
                element={
                  <PrivateRoute>
                    <OrdersPlaceholder />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    );
  }
}
export default withTranslation()(App);
