import {
  Drawer,
  Box,
  List,
  Divider,
  ListItemIcon,
  Avatar
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LoadingComponent from "../../Common/LoadingComponent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { SwitchAccount } from "@mui/icons-material";
import AccountSelect from "./AccountSelect";
import { AuthContext } from "../../Login/AuthContext";
import MenuListItem from "../MenuListItem";
export default function AccountMenu(props) {
  const { t } = useTranslation();
  let auth = useContext(AuthContext);
  const [accountSelectOpen, setAccountSelectOpen] = useState(false);
  const handleAccountSelectOpen = () => {
    setAccountSelectOpen(true);
  };
  const handleAccountSelectClose = () => {
    setAccountSelectOpen(false);
  };
  const onAccountSelect = (value) => {
    auth.authenticate(value);
    props.onClose();
  };
  return (
    <Drawer anchor="right" open={props.isOpen} onClose={props.onClose}>
      <Box backgroundColor="navigation.main" className="Header" />
      {!auth.isAuthenticated ? (
        <List onClick={props.onClose}>
          <HashLink key="Login" to="/login">
            <MenuListItem itemIcon={<LogoutIcon />} text="Zaloguj się" />
          </HashLink>
        </List>
      ) : (
        <React.Fragment>
          <LoadingComponent load="group">
            {data => (
              <AccountSelect
                data={data}
                open={accountSelectOpen}
                onClose={handleAccountSelectClose}
                onSelect={onAccountSelect}
              />
            )}
          </LoadingComponent>
          <List sx={{ p: 0 }}>
            <MenuListItem
              sx={{ pb: 0 }}
              key="User"
              notButton
              avatar={<Avatar alt={auth.user} src={`./images/${auth.user}.jpg`}/>}
              user={{
                name: auth.user,
                mail: "textdolny@gmail.com"
              }}
            />
            <Divider sx={{ my: 1 }} />
            <MenuListItem
              text="Zmień konto"
              itemIcon={<SwitchAccount />}
              onClick={handleAccountSelectOpen}
            >
              <ListItemIcon
                sx={{
                  justifyContent: "flex-end"
                }}
              >
                <ArrowForwardIosIcon />
              </ListItemIcon>
            </MenuListItem>
            <HashLink key="Logout" to="/login">
              <MenuListItem
                text="Wyloguj się"
                itemIcon={<LogoutIcon />}
                onClick={() => {
                  auth.signout();
                  props.onClose();
                }}
              />
            </HashLink>
          </List>
        </React.Fragment>
      )}
    </Drawer>
  );
}
