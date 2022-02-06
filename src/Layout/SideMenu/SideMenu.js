import { Drawer, Box, Divider } from "@mui/material";
import React from "react";
import LinkMenu from "./LinkMenu";
import SettingsMenu from "./SettingsMenu";
export default function SideMenu(props) {
  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <Box backgroundColor="navigation.main" className="Header" />
      <LinkMenu onClose={props.onClose} />
      <Divider sx={{ my: 1 }} />
      <SettingsMenu
        isDark={props.isDark}
        toggleNightMode={props.toggleNightMode}
      />
    </Drawer>
  );
}
