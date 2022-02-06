import { Avatar, Dialog, DialogTitle, List } from "@mui/material";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../../Login/AuthContext";
import MenuListItem from "../MenuListItem";
import { useTranslation } from "react-i18next";

export default function AccountSelect(props) {
  const { t } = useTranslation();
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>{t("Wybierz konto")}</DialogTitle>
      <List sx={{ pt: 0 }} onClick={props.onClose}>
        {props.data.map((user, id) => (
          <MenuListItem
            key={id}
            avatar={<Avatar alt={user.username} src={`./images/${user.username}.jpg`} />}
            onClick={() => props.onSelect(user.username)}
            user={{
              name: user.username
            }}
          />
        ))}
        <MenuListItem
          text="Dodaj konto"
          avatar={
            <Avatar>
              <AddIcon />
            </Avatar>
          }
        />
      </List>
    </Dialog>
  );
}
