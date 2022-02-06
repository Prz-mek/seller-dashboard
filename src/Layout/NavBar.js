import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import SideMenu from "./SideMenu/SideMenu";
import AccountMenu from "./AccountMenu/AccountMenu";
import { AuthContext } from "../Login/AuthContext";
const NavBarIcon = (props) => (
  <IconButton {...props} size="large" color="inherit" aria-label="menu">
    {props.children}
  </IconButton>
);
export default function NavBar(props) {
  let auth = React.useContext(AuthContext);
  const { t } = useTranslation();
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = React.useState(false);
  const handleSideMenuOpen = () => {
    setIsSideMenuOpen(true);
  };
  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };
  const handleAccountMenuOpen = () => {
    setIsAccountMenuOpen(true);
  };
  const handleAccountMenuClose = () => {
    setIsAccountMenuOpen(false);
  };
  return (
    <div>
      <SideMenu
        isOpen={isSideMenuOpen}
        isDark={props.isDark}
        onClose={handleSideMenuClose}
        toggleNightMode={props.toggleNightMode}
      />
      <AppBar position="relative">
        <Toolbar>
          <NavBarIcon edge="start" sx={{ mr: 2 }} onClick={handleSideMenuOpen}>
            <MenuIcon />
          </NavBarIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("Panel sprzedawcy")}
          </Typography>
          <NavBarIcon edge="end" onClick={handleAccountMenuOpen}>
            {!auth.isAuthenticated ? (
              <AccountCircleIcon />
            ) : (
              <Avatar sx={{ width: "32px", height: "32px" }} alt={auth.user} src={`images/${auth.user}.jpg`} />
            )}
          </NavBarIcon>
        </Toolbar>
      </AppBar>
      <AccountMenu
        isOpen={isAccountMenuOpen}
        onClose={handleAccountMenuClose}
      />
    </div>
  );
}
