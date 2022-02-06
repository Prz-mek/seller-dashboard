import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SaleChart from "./SaleChart";
import { useTranslation } from "react-i18next";
import { chartSelect } from "./chartSelect";

export default function ChartWidget(props) {
  const { t } = useTranslation();
  const [chartSettings, setchartSettings] = React.useState({
    dataType: "money-circulation",
    type: "line",
    timeSpan: "today",
  });
  const [previous, setPrevious] = React.useState(false);
  const onChartSettingsChange = (e) => {
    setchartSettings({
      ...chartSettings,
      [e.target.name]: e.target.value,
    })
  }
  const onPreviousPeriodChange = (e) => {
    setPrevious(e.target.checked);
  }
  return (
    <Box className="WidgetContentWrapper">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <SaleChart data={props.data[chartSettings.timeSpan][chartSettings.dataType][previous]} type={chartSettings.type} timeSpan={chartSettings.timeSpan} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              mx: {
                xs: 0,
                lg: "auto"
              },
              maxWidth: "260px"
            }}
          >
            {chartSelect.map((select) => (
              <FormControl key={select.name} className="ChartControl">
                <InputLabel id={select.label}>{t(select.label)}</InputLabel>
                <Select
                  labelId={select.label}
                  name={select.name}
                  value={chartSettings[select.name]}
                  label={select.label}
                  onChange={onChartSettingsChange}
                >
                  {select.menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.value} value={menuItem.value}>{t(menuItem.name)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
            <FormControlLabel
              control={
                <Checkbox
                  checked={previous}
                  onChange={onPreviousPeriodChange}
                />
              }
              label={t("Poprzedni okres")}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
