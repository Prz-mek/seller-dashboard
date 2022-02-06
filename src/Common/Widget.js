import React from "react";
import { styled } from "@mui/system";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const WidgetName = styled("a")({
  display: "block",
  color: "inherit",
  textDecoration: "none",
  marginBottom: "0.5rem",
  "&:hover": {
    textDecoration: "underline"
  }
});
const StyledBox = (props) => (
  <Box
    sx={{
      p: {
        xs: 4,
        md: 5,
        xl: 6
      },
      minHeight: "275px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: 2,
      backgroundColor: "background.default",
      borderRadius: 3,
    }}
  >
    {props.children}
  </Box>
);
export default function Widget(props) {
  const { t } = useTranslation();
  return (
    <StyledBox>
      {props.name && (
        <div>
          <WidgetName href={props.href} id={props.href.substring(1)}>
            <Typography variant="h5" component="h2">
              {t(props.name)}
            </Typography>
          </WidgetName>
          <Divider />
        </div>
      )}
      {props.children}
      <div />
    </StyledBox>
  );
}