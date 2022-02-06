import * as React from "react";
import { styled } from "@mui/system";
import {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";
const StyledListItem = styled(ListItem)({
  width: "260px"
});

export default function MenuListItem(props) {
  const { t } = useTranslation();
  return (
    <StyledListItem
      sx={props.sx}
      button={props.notButton ? false : true}
      onClick={props.onClick ? props.onClick : undefined}
    >
      {props.itemIcon && <ListItemIcon>{props.itemIcon}</ListItemIcon>}
      {props.avatar && <ListItemAvatar>{props.avatar}</ListItemAvatar>}
      {props.text && <ListItemText primary={t(props.text)} />}
      {props.user && (
        <ListItemText
          primary={
            <React.Fragment>
              <Typography component="span">
                {props.user.name}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.disabled"
              >
                {props.user.mail}
              </Typography>
            </React.Fragment>
          }
        />
      )}
      {props.children}
    </StyledListItem>
  );
}
